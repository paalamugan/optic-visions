const Sequelize = require('sequelize');
const config = require('.');

const db ={};

let sequelize;
let options = {
    // operatorAliases: Sequelize.Op,
    dialect: config.dbDialect,
    host:config.dbHost,
    define:{
        timestamps: true
    },
    pool:{
        max :5,
        min:0,
        idle:10000,
        acquire:30000
    }
}

if (process.env.NODE_ENV === "production") {
    sequelize = new Sequelize(config.dbUrl, options);
} else {
    // sequelize = new Sequelize(env.database, env.username, env.password, options);
    sequelize = new Sequelize(config.dbUrl, options);
}

sequelize.authenticate().then(() =>{

    console.log("Connection established sucessfully");

})
.catch((err)=>{
    console.log("Some thing problem in database connection",err);
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Call Model data
db.companyuserinfo      = require('../models/company-user-info')(sequelize,Sequelize);
db.forgetpassword       = require('../models/forget-password')(sequelize,Sequelize);
db.signInInfo           = require('../models/signin-info')(sequelize,Sequelize);
db.employeeSingnInInfo  = require('../models/employee-signin-info')(sequelize,Sequelize);
db.companyEmpInfo       = require('../models/company-emp-info')(sequelize,Sequelize);

db.productlist          = require('../models/product-list')(sequelize,Sequelize);
db.frametype            = require('../models/frame-type')(sequelize,Sequelize);
db.framematerial        = require('../models/frame-material')(sequelize,Sequelize);
db.boxmodel             = require('../models/box-model')(sequelize,Sequelize);
db.customer             = require('../models/customer')(sequelize,Sequelize);
db.eyeprescriptions     = require('../models/eye-prescription')(sequelize,Sequelize);

db.salesorder            = require('../models/sales-order')(sequelize,Sequelize);
db.proditem              = require('../models/product-item')(sequelize,Sequelize);
db.invoiceDetail         = require('../models/invoice-detail')(sequelize,Sequelize);
db.brand                 = require('../models/brand')(sequelize,Sequelize);
db.framemodel            = require('../models/frame-model')(sequelize,Sequelize);
db.lenstype            = require('../models/lens-type')(sequelize,Sequelize);

/* Association */
db.signInInfo.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.employeeSingnInInfo.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.companyEmpInfo.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.productlist.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.frametype.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.framematerial.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.boxmodel.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.customer.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.eyeprescriptions.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.salesorder.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.proditem.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.invoiceDetail.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.forgetpassword.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.brand.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.framemodel.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.framemodel.belongsTo(db.brand,{foreignKey: 'fk_brandid',targetKey: 'uuid',onDelete: 'CASCADE'});
db.lenstype.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});  
// db.employeeSingnInInfo.belongsTo(db.companyEmpInfo,{foreignKey:"employeeId"});

db.salesorder.hasMany(db.eyeprescriptions,{as:'SalesOrderID'});
db.salesorder.belongsTo(db.customer);

db.salesorder.belongsToMany(db.proditem, { as: 'SalesOrd', through: 'SalesOrderList', foreignKey: 'salesorderId', otherKey: 'proditemId'});
db.proditem.belongsToMany(db.salesorder, { as: 'ProdItem', through: 'SalesOrderList', foreignKey: 'proditemId', otherKey: 'salesorderId'});

db.proditem.belongsTo(db.productlist);
db.proditem.belongsTo(db.frametype);
db.proditem.belongsTo(db.framematerial);

// db.brand.hasOne(db.framemodel,{foreignKey: 'fk_brandid',sourceKey: 'uuid'});
/*Note:Need to find solution to store boxmodelid in proditem table */
db.proditem.belongsTo(db.boxmodel);
db.proditem.belongsTo(db.eyeprescriptions);

db.salesorder.hasOne(db.invoiceDetail);

module.exports = db;



