const { FrameMaterial } = require('../models');

exports.addNew = async(req,res,next) =>{
    let [material, created] = await FrameMaterial.findOrCreate({
            where :{name:req.body.name,
                    fk_companyid:req.currentUser.companyId
            },
            defaults: {name:req.body.name,model:req.body.model,size:req.body.size,quantity:req.body.quantity,retailerPrice: req.body.retailerPrice,wholesalerPrice:req.body.wholesalerPrice,fk_companyid:req.currentUser.companyId}
        })
        if(!created){
            return next(new Error("Already Same FrameMaterial has created."));
        }
        res.json(material);
}

exports.getAllFrameMaterial = async(req,res) =>{
    let displayAllList = await FrameMaterial.findAndCountAll({
        where :{fk_companyid : req.currentUser.companyId}
    })
    res.json(displayAllList.rows);
}

exports.deleteFrameMaterial = async(req,res)=>{
    const Id = req.params.framematerialId;
    //console.log("Producttype value:"+prodtype)
  /*await ProductType.destroy({
        where:{idname :prodtypeid}
    }).then(()=>{
        res.status(200).send("Deleted the Product Sucessfully"+prodtype);
    })*/
}

exports.updateFrameMaterial = async(req,res,next)=>{
    
    const Id = req.params.framematerialId;

    await FrameMaterial.update({
            name: req.body.name,
            model:  req.body.model,
            size:  req.body.size,
            quantity:  req.body.quantity,
            retailerPrice: req.body.retailerPrice,
            wholesalerPrice: req.body.wholesalerPrice,
    },{
        where :{uuid :Id,fk_companyid:req.body.fk_companyid}
    })

    res.json({ success: true })
}