const { FrameModel, Brand } = require('../models');

exports.addNew = async(req,res,next) =>{
    let [frameModel, created] = await FrameModel.findOrCreate({
            where :{fk_brandid:req.body.brand.uuid,
                    model:req.body.model,
                    frametype:req.body.frametype,
                    fk_companyid:req.currentUser.companyId
            },
            defaults: {fk_brandid:req.body.brand.uuid,model:req.body.model,frametype:req.body.frametype,size:req.body.size,quantity:req.body.quantity,retailerPrice: req.body.retailerPrice,wholesalerPrice:req.body.wholesalerPrice,fk_companyid:req.currentUser.companyId}
        })
        if (!created) {
            return next(new Error("Already Same Frame Model has created."));
        }
        res.json(frameModel);
}

exports.getAllFrameModel = async(req,res) =>{
    let displayAllList = await FrameModel.findAndCountAll({
        where :{fk_companyid : req.currentUser.companyId},
        include:[{
            model: Brand,
            as: 'brand'
        }]
    })

    res.json(displayAllList.rows);
}

exports.deleteFrameModel = async(req,res)=>{
    const Id = req.params.framematerialId;
    //console.log("Producttype value:"+prodtype)
  /*await ProductType.destroy({
        where:{idname :prodtypeid}
    }).then(()=>{
        res.status(200).send("Deleted the Product Sucessfully"+prodtype);
    })*/
}

exports.updateFrameModel = async(req,res,next)=>{
    const Id = req.params.uuid;
   await FrameModel.update({
            fk_brandid: req.body.brand.uuid,
            model:  req.body.model,
            frametype:req.body.frametype,
            quantity:  req.body.quantity,
            retailerPrice: req.body.retailerPrice,
            wholesalerPrice: req.body.wholesalerPrice,
    },{
        where :{uuid :Id,fk_companyid:req.body.fk_companyid}
    })

    res.json({ success: true })
   
}
exports.findFrameModel= async(req,res,next)=>{
    let data = await FrameModel.findOne({
        where:{model:req.query.model,fk_brandid:req.query.brand,fk_companyid:req.currentUser.companyId},
        include:[{
            model:Brand,
            as: 'brand'
        }]
        // attributes:['model','quantity','frametype','retailerPrice','wholesalerPrice'],
    })
    res.json(data);
}