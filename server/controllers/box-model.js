const { BoxModel } = require('../models');

exports.addNew = async(req, res, next) => {

    let body = req.body;

    let [ box, created ] = await BoxModel.findOrCreate({
            where :{name:req.body.name,
                box_model:req.body.box_model,
                fk_companyid:req.currentUser.companyId
            },
            defaults: {name: body.name, box_model: body.box_model,
                        quantity: body.quantity, retailerPrice: body.retailerPrice, 
                        wholesalerPrice: body.retailerPrice, fk_companyid: req.currentUser.companyId }
        })

        if (!created) {
            return next(new Error("Already Box Name has created."));
        }

        res.json(box);
}

exports.getAllBoxModel = async(req, res, next) => {

    let displayAllList = await BoxModel.findAndCountAll({
        where : { fk_companyid : req.currentUser.companyId }
    })

    res.json(displayAllList.rows);

}

exports.deleteBoxModel = async(req,res)=>{
    const Id = req.params.boxmodelId;
    //console.log("Producttype value:"+prodtype)
  /*await ProductType.destroy({
        where:{idname :prodtypeid}
    }).then(()=>{
        res.status(200).send("Deleted the Product Sucessfully"+prodtype);
    })*/
}

exports.updateBoxModel = async(req,res)=>{
    const id = req.params.uuid;
    let boxModel = await BoxModel.update({
        name : req.body.name,
        box_model: req.body.box_model,
        qunatity: req.body.quantity,
        retailerPrice: req.body.retailerPrice,
        wholesalerPrice: req.body.wholesalerPrice,
    },{
        where: { uuid: id, fk_companyid: req.body.fk_companyid }
    })

    res.json(boxModel);
}