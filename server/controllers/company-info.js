const bcrypt = require("bcrypt");
const { CompanyUserInfo, SigninInfo, ForgetPassword, Sequelize } = require('../models');
const Op = Sequelize.Op;

const { sendRegisterMail } = require("../common/mailer");
const { getToken } = require("../common/utils");

const saltRounds = 10;

exports.registerCompany = async (req, res, next) => {

    let body = req.body;

    Object.keys(body).forEach(key => (!body[key] || body[key] === 'undefined') && delete body[key]);
 
    if (req.file) {
        body.avatar = req.file && `/images/${ req.file.filename}`;
    }

    if (!body.email) {
        return next(new Error("Email is missing"));
    }

    try {

        let company = await CompanyUserInfo.findOne({
            where: {
                [Op.or]: [
                    { email: body.email }
                ],
            },
        });

        if (company && company.email === body.email) {
            throw new Error("Already email registered!");
        }

        body.password =  await bcrypt.hash(body.password, saltRounds);

        let user = await CompanyUserInfo.create(body);

        await SigninInfo.create({ 
            fk_companyid: user.uuid, 
            username: user.email,
            password: user.password
        });

        await sendRegisterMail(user.email, { userName: user.userName });

        res.json({ success: true });
    
    } catch (err) {
        next(err);
    }

};

exports.Adminlogin = async (req, res, next) => {

    try {

        let admin = await CompanyUserInfo.findOne({ where: { email: req.body.email }});

        if (!admin) {
            throw new Error("Email is not Registerd");
        }

        let result = await bcrypt.compare(req.body.password, admin.password);

        if (!result) {
            throw new Error("Password is Incorrect");
        }

        let data = {
            userName: admin.userName,
            companyName: admin.companyName,
            companyId: admin.uuid,
            Identifier: "admin",
            company: admin,
        }

        const token = getToken(data);

        return res.json({
            token: token,
            Identifier: data.Identifier,
        });

    } catch (err) {
        return next(err);
    }

};

exports.Username = async (req, res, next) => {
  return res.json(req.currentUser);
};

exports.DeleteCompany = async (req, res, next) => {

    await CompanyUserInfo.destroy({
        where: { uuid: req.params.uuid },
    });

    return res.json({ success: true });
};

exports.ForgetPassword = async (req, res, next) => {

    let tempPassword = Date.now() + '-' + Math.round(Math.random() * 1E9);
    let result = null;

    let admin = await CompanyUserInfo.findOne({ where: { email: req.body.email } });

    if (!admin) {
      return next(new Error("Email is not Registerd"));
    }

    let forgetpass = await ForgetPassword.findOne({ where: { fk_companyid: admin.uuid } })

    if (!forgetpass) {
        result = await ForgetPassword.create({ tempPassword: tempPassword, fk_companyid: admin.uuid });
    } else {
        result = await ForgetPassword.update({ tempPassword: tempPassword }, { where: { fk_companyid: admin.uuid }});
    }

    await sendForgetPasswordMail(user.email, { userName: user.userName, tempPassword: result.tempPassword, uuid: result.uuid });
    return res.json({ success: true });

};

exports.GetForgetPassword = async (req, res, next) => {

    let data = await ForgetPassword.findById(req.params.id);

    if (!data) {
        let err = new Error("No Record Found");
        err.status = 403;
        return next(err);
    }

    return res.json(data);
};

exports.UpdateForgetPassword = async (req, res, next) => {

    if (!req.params.id) {
        throw new Error("Id is missing");
    }

    let company = await CompanyUserInfo.findById(req.params.id);

    if (!company) {
      throw new Error("No Data found!");
    }

    let hash = await bcrypt.hash(req.body.newPassword, saltRounds);

    await CompanyUserInfo.update(
        { password: hash },
        { where: { uuid: req.params.id } }
    );

    await ForgetPassword.destroy({ where: { uuid: req.body.uuid } });

    return res.json({ success: true });

};
// exports.Employeelogin = async(req,res,next)=>{
//   await  CompanyUserInfo.findOne({
//        where:{companyname :req.params.companyname}
//     }).then(companydetail=>{
//         if(null !=companydetail){
//             res.status(200).send(companydetail);
//         }else{
//             res.send("No company register with the name :"+req.params.companyname)
//         }
//     }).catch(err=>{
//         console.log(err);
//     })
// }

exports.getDetails = async (req, res, next) => {

    let companydetail = await CompanyUserInfo.findOne({
        where: { uuid: req.params.id },
        attributes: { exclude: ['password'] }
    });

    if (!companydetail) {
        throw new Error("No company register!")
    }

    res.json(companydetail);
};

exports.updateDetails = async (req, res, next) => {

    let body = req.body;

    let companydetail = await CompanyUserInfo.findOne({
        where: { uuid: req.params.companyId },
    });

    if (!companydetail) {
        return next(new Error("No record avaiable for :" + req.params.companyName));
    }

    if (body.currentPassword && body.newPassword) {

        let result = await bcrypt.compare(body.currentPassword, companydetail.password);

        if (!result) {
            return next(new Error("Wrong Password!"));
        }

        body.password = await bcrypt.hash(body.newPassword, saltRounds);
    }

    let company = await CompanyUserInfo.update(body, { where: { uuid: req.params.companyId } });

    return res.json(company);

};
