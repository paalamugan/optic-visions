const { InvoiceDetail, Customer } = require('../models');

exports.addinvoiceorder = async(req,res,next)=>{
    Customer.findOne({
        where:{mobilenumber:req.body.mobilenumber}
    }).then(customer=>{
        const invOrder = InvoiceDetail.create({
            invoiceNo :req.body.invoiceNo,
            invoiceDate:req.body.invoiceDate,
            salesman:req.body.salesman,
            itempurchased:req.body.itempurchased,
            customerId:customer.id
          }).then(invoiceorder=>{
            res.send(invoiceorder);
        }).catch(err=>{
            console.log("error happen :"+err)
          })
    })
}

exports.getInvoiceList = async(req,res,next)=>{
    InvoiceDetail.findAndCountAll({
        include: [
            { model: Customer, required: false}
         ]
    }).then(allinvoiceOrd=>{
        res.json(allinvoiceOrd.rows);
        console.log("Invoice Order List ::"+allinvoiceOrd.count);
    })
}