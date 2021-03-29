module.exports = (sequelize, Datatypes, options = {}) => {

    const ForgetPassword = sequelize.define('ForgetPassword', {
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
          },
        tempPassword:{
            type:Datatypes.STRING,
            allowNull:false
        }
    }, options);

    ForgetPassword.associate = function(models) {
        // associations can be defined here
        ForgetPassword.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
    };

    return ForgetPassword;
}