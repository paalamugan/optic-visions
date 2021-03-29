module.exports = (sequelize, Datatypes, options = {}) => {

    const ProductList = sequelize.define('ProductList',{
        producttype:{
            type:Datatypes.STRING,
            allowNull:false,
            //primaryKey:true
        },
        productmodel:{
            type:Datatypes.STRING
        },
        price:{
            type:Datatypes.INTEGER,
            allowNull:false
        }
    }, options);

    ProductList.associate = function(models) {
        // associations can be defined here
        ProductList.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
    };

    return ProductList;
}