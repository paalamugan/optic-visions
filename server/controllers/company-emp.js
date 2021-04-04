const bcrypt= require('bcrypt');
const { getToken } = require("../common/utils");
const { CompanyEmpInfo, EmployeeSigninInfo, CompanyUserInfo, Sequelize } = require('../models');

const Op = Sequelize.Op;

const saltRounds = 10;

exports.addNewEmployee = async(req, res, next) => {
    
    let body = req.body;

    let findEmployee = await CompanyEmpInfo.findOne({
        where: {
            employeeEmail: body.employeeEmail,
            fk_companyid: body.uuid
        }     
    })
    
    if (findEmployee) {
        return next(new Error("Already this employee email is registered!"));
    }

    let hash = await bcrypt.hash(body.employeePassword, saltRounds);

    let data = {
        employeeName: body.employeeName,
        mobileNumber: body.mobileNumber,
        employeeEmail: body.employeeEmail,
        employeePassword: hash,
        address: body.address,
        DOB: body.DOB,
        DOJ: body.DOJ,
        adminAccess: body.adminAccess,
        fk_companyid: body.uuid     
    }
    
    let employee = await CompanyEmpInfo.create(data);

    return res.json(employee);

};

exports.Employeelogin = async(req, res, next) => {

    let body = req.body;

    let employeedetail = await CompanyEmpInfo.findOne({
        where: { employeeEmail: body.email},
        include: [{
            model: CompanyUserInfo
        }]
    })

    if(!employeedetail) {
        return next(new Error('Email is not Registerd'));
    }

    const employeeValue = employeedetail.adminAccess === 'Yes' ? 'employee-admin' : 'employee';

    let comparePassword = await bcrypt.compare(body.password, employeedetail.employeePassword);

    if (!comparePassword) {
        return next(new Error("Password is Incorrect"));
    }
    
    let data = {
        userName: employeedetail.employeeName,
        userImage: employeedetail.userImage,
        companyName: employeedetail.CompanyUserInfo.companyName,
        companyId: employeedetail.CompanyUserInfo.uuid,
        Identifier: employeeValue,
        employee: employeedetail  
    }

    if (employeeValue === "employee-admin") {
        data.company = employeedetail.CompanyUserInfo;
    }

    let token = getToken(data);
    
    return res.json({ token: token, Identifier: employeeValue });
}

exports.getEmpDetails = async(req, res, next) => {

    let empinfo = await CompanyEmpInfo.findOne({
        where: {
           uuid: req.params.id,
           fk_companyid: req.currentUser.companyId
        },
        attributes: { exclude: ['employeePassword'] }
    })

    if (!empinfo) {
        return next(new Error("No record found!"));
    }

    res.json(empinfo);
}

exports.updateEmpDetails = async(req, res, next) => {

    let body = req.body;

    let employee = await CompanyEmpInfo.findOne({ where: { uuid: req.params.id }});

    if (!employee) {
        return next(new Error("No record Found."));
    }

    if (body.employeePassword) {
        body.employeePassword = await bcrypt.hash(body.employeePassword, saltRounds);
    }

    employee = await CompanyEmpInfo.update(body, { 
        where : { 
            [Op.and]: [{ uuid: employee.uuid }, { fk_companyid: body.fk_companyid }] 
        }
    });

    return res.json({ success: true });
  
}

exports.getAllEmpDetails = async(req,res)=>{

    let result = await CompanyEmpInfo.findAndCountAll({
        where:{ fk_companyid :req.currentUser.companyId},
        include:[{
            model: CompanyUserInfo
        }],
        attributes: { exclude: ['employeePassword'] }
    })
        return res.json(result.rows);

}

exports.deleteEmpDetails = async (req, res, next) => {

}