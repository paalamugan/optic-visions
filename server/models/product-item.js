module.exports = (sequelize, Datatypes, options = {}) => {

    const ProductItem = sequelize.define('ProductItem', {
        quantity:{
            type:Datatypes.INTEGER,
            allowNull:false
        },
        price:{
            type:Datatypes.INTEGER
        }
    }, options);

    ProductItem.associate = function(models) {
        // associations can be defined here
        ProductItem.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
        ProductItem.belongsToMany(models.SalesOrder, { as: 'ProductItem', through: 'sales-order-list', foreignKey: 'product_item_id', otherKey: 'salesorderId' });

        ProductItem.belongsTo(models.ProductList);
        ProductItem.belongsTo(models.FrameType);
        ProductItem.belongsTo(models.FrameMaterial);
        
        ProductItem.belongsTo(models.BoxModel); /*Note: Need to find solution to store boxmodelid in proditem table */
        ProductItem.belongsTo(models.EyePrescription);
    };

    return ProductItem;
}