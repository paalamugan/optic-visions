const { Brand, FrameModel } = require('../models');

exports.addNew = async(req,res,next) =>{

  let [brand, created] = await Brand.findOrCreate({
            where :{name:req.body.name,
                    fk_companyid:req.currentUser.companyId
            },
            defaults: { name:req.body.name, code:req.body.code, fk_companyid: req.currentUser.companyId }
        })

        if(!created){
            return next(new Error("Already Same Brand has created."));
        }
        res.json(brand);

}

exports.getAllBrand = async(req,res) =>{

    let displayAllList = await Brand.findAndCountAll({
        where :{fk_companyid : req.currentUser.companyId}
    })

    return res.json(displayAllList.rows);
}

exports.deleteBrand = async(req,res)=>{
    await Brand.destroy({ where: { uuid: req.params.uuid }})
        
    return res.json({ success:true });
    // console.log(Id);
    // return Brand
    // .findByPk(Id)
    // .then(brand => {
    //   if (!brand) {
    //     return res.status(400).send({
    //       message: 'Brand Not Found',
    //     });
    //   }
       
    //     return FrameModel
    //         .destroy({where:{brand_uuid:Id}})
    //          .then(() =>{
    //            return brand
    //                 .destroy()
    //                 .then((deleteed) => res.status(200).send(deleteed))
    //                 .catch(error => res.status(400).send(error));
    //          })
    //          .catch(error => res.status(400).send(error));
    //   })
  
    // .catch(error => res.status(400).send(error));
    //console.log("Producttype value:"+prodtype)
//   await Brand.destroy({
//         where:{uuid :Id}
//     }).then((brand)=>{
//         console.log(brand);
//        return res.sendStatus(200).send(brand);
//     })
}

exports.updateBrand= async(req,res,next)=>{
    const id = req.params.uuid;
   let updateBrand = await Brand.update({
            name: req.body.name,
            code:  req.body.code,
    },{
        where: { uuid :id, fk_companyid: req.body.fk_companyid }
    })
    return res.json({ success: true });
}