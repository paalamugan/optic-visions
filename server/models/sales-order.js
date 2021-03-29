module.exports = (sequelize, Datatypes, options = {}) => {

    const SalesOrder = sequelize.define('SalesOrder', {
        totalprice:{
            type:Datatypes.INTEGER,
            allowNull :false
        },
        discount:{
            type:Datatypes.FLOAT,
        },
        advanceAmt:{
            type:Datatypes.FLOAT,
           // allowNull :false
        },
        balance:{
            type:Datatypes.FLOAT,
            //allowNull :false
        }, 
        orderdate:{
            type:Datatypes.DATE,
           // allowNull :false
        },
        deliverydate:{
            type:Datatypes.DATE,
            //allowNull :false
        }
      
    }, options);

    SalesOrder.associate = function(models) {
        // associations can be defined here
        SalesOrder.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
        SalesOrder.belongsTo(models.Customer);
        SalesOrder.hasOne(models.InvoiceDetail);
        SalesOrder.hasMany(models.EyePrescription, { as:'SalesOrderID' });
        SalesOrder.belongsToMany(models.ProductItem, { as: 'SalesOrder', through: 'sales-order-list', foreignKey: 'salesorderId', otherKey: 'proditemId' });
        
    };

    return SalesOrder;
}