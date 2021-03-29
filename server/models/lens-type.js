module.exports = (sequelize, Datatypes, options = {}) => {

    const LensType = sequelize.define('LensType', {
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
          },
          powerlenstype:{
            type:Datatypes.ENUM,
            values:['Singular', 'Bifocal', 'Progressive', 'Trifocal'],
            allowNull:false
            },
            name:{
            type:Datatypes.STRING,
            allowNull:false
        },
        lensmaterial:{
            type:Datatypes.STRING,
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

    LensType.associate = function(models) {
        // associations can be defined here
        LensType.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
    };

    return LensType;
}
