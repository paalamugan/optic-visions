const { LensType } = require('../models');

exports.addNew = async(req,res,next) =>{
    let [lenstype, created] = await LensType.findOrCreate({
            where :{powerlenstype:req.body.powerlenstype,
                    name:req.body.name,
                    lensmaterial:req.body.lensmaterial,
                    fk_companyid:req.currentUser.companyId
            },
            defaults: {powerlenstype:req.body.powerlenstype,name:req.body.name,lensmaterial:req.body.lensmaterial,quantity:req.body.quantity,retailerPrice: req.body.retailerPrice,wholesalerPrice:req.body.wholesalerPrice,fk_companyid:req.currentUser.companyId}
        })
        if(!created){
            return next(new Error("Already Same Lens Type has created."));
        }
        res.json(lenstype);
}

exports.getAllLensType = async(req,res) =>{
    let displayAllList = await LensType.findAndCountAll({
        where :{fk_companyid : req.currentUser.companyId},
    })

    res.json(displayAllList.rows);
}

exports.deleteLensType = async(req,res)=>{
    const Id = req.params.framematerialId;
    //console.log("Producttype value:"+prodtype)
  /*await ProductType.destroy({
        where:{idname :prodtypeid}
    }).then(()=>{
        res.status(200).send("Deleted the Product Sucessfully"+prodtype);
    })*/
}

exports.updateLensType = async(req,res,next)=>{
    const Id = req.params.uuid;
   await LensType.update({
            powerlenstype: req.body.powerlenstype,
            name:  req.body.name,
            lensmaterial:req.body.lensmaterial,
            quantity:  req.body.quantity,
            retailerPrice: req.body.retailerPrice,
            wholesalerPrice: req.body.wholesalerPrice,
    },{
        where :{uuid :Id,fk_companyid:req.body.fk_companyid}
    })

    res.json({ success: true });
   
}
exports.findLensType= async(req,res,next)=>{
    let lensType = await LensType.findOne({
        where:{powerlenstype:req.query.powerlenstype,name:req.query.name,fk_companyid:req.currentUser.companyId},
    })

    res.json(lensType);
}