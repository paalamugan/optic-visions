module.exports = (sequelize, Datatypes, options = {}) => {
    
    const FrameModel = sequelize.define('FrameModel', {
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
          },
        frametype:{
            type:Datatypes.ENUM,
            values:['HALF RIM','FULL RIM','RIM LESS'],
            allowNull:false
            },
        model:{
            type:Datatypes.STRING,
            allowNull:false
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

    FrameModel.associate = function(models) {
        // associations can be defined here
       FrameModel.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
       FrameModel.belongsTo(models.Brand, { foreignKey: 'fk_brandid',targetKey: 'uuid', onDelete: 'CASCADE' });
    };

    return FrameModel;
}