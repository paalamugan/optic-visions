module.exports = (sequelize, Datatypes, options = {}) => {

    const BoxModel = sequelize.define('BoxModel', {
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
        },
        name:{
            type:Datatypes.STRING,
            allowNull:false
        },
        box_model:{
            type:Datatypes.STRING
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

    BoxModel.associate = function(models) {
        // associations can be defined here
        BoxModel.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
    };

    return BoxModel;
}