module.exports = (sequelize, Datatypes, options = {}) => {

    const EyePrescription = sequelize.define('EyePrescription', {
        personname: {
            type:Datatypes.STRING,
            allownull:false
        },
        eyedefectIn: {
            type: Datatypes.ENUM,
            values: ['left', 'right']
        },
        eyesiteAt: {
            type: Datatypes.ENUM,
            values: ['distance', 'near'] 
        },
        sph: {
            type: Datatypes.INTEGER
        },
        axis: {
            type: Datatypes.INTEGER
        },
        prism: {
            type: Datatypes.INTEGER
        }
    }, options);

    EyePrescription.associate = function(models) {
        // associations can be defined here
        EyePrescription.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
    };

    return EyePrescription;
}