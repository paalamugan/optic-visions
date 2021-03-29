module.exports = (sequelize, Datatypes, options = {}) => {

    const EmployeeSigninInfo = sequelize.define('EmployeeSigninInfo', {
        email: {
            type:Datatypes.STRING,
            primaryKey: true,
            allowNull:false
        },
        password: {
            type:Datatypes.STRING,
            allowNull:false
        },
        employeeId: {
            type:Datatypes.STRING,
           
           // autoIncrement: true,
            allowNull:false
        },
        adminaccess: {
            type: Datatypes.ENUM,
            values: ['Yes','No']
        }
    }, options);

    EmployeeSigninInfo.associate = function(models) {
        // associations can be defined here
        EmployeeSigninInfo.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
        // EmployeeSigninInfo.belongsTo(models.CompanyUserInfo, { foreignKey: "employeeId" });
    };

    return EmployeeSigninInfo;
}