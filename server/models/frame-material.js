module.exports = (sequelize, Datatypes, options = {}) => {

    const FrameMaterial = sequelize.define('FrameMaterial', {
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
          },
        name:{
            type:Datatypes.STRING,
            allowNull:false
        },
        model:{
            type:Datatypes.STRING,
        },
        size:{
            type:Datatypes.INTEGER,
        },
        quantity:{
            type:Datatypes.INTEGER,
        },
        retailerPrice:{
            type:Datatypes.INTEGER,
            allowNull:false
        },
        wholesalerPrice:{
            type:Datatypes.INTEGER,
        }
    }, options);

    FrameMaterial.associate = function(models) {
        // associations can be defined here
        FrameMaterial.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
    };

    return FrameMaterial;
}