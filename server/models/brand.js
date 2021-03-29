module.exports = (sequelize, Datatypes, options = {}) => {

    const Brand = sequelize.define('Brand', {
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
          },
        name:{
            type:Datatypes.STRING,
            allowNull:false
        },
        code:{
            type:Datatypes.STRING
        }
    }, options);

    Brand.associate = function(models) {
        // associations can be defined here
        Brand.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
        // Brand.hasOne(models.FrameModel, { foreignKey: 'fk_brandid', sourceKey: 'uuid' });
    };

    return Brand;
}