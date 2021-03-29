module.exports = (sequelize, Datatypes, options = {}) => {

    const SignInInfo = sequelize.define('SigninInfo', {
        username:{
            type:Datatypes.STRING,
            allowNull:false
        },
        password:{
            type:Datatypes.STRING,
            allowNull:false
        }
    }, options);

    SignInInfo.associate = function(models) {
        // associations can be defined here
        SignInInfo.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
    };

    return SignInInfo;
}