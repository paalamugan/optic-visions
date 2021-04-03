module.exports = (sequelize, Datatypes, options = {}) => {

    const CompanyEmpInfo = sequelize.define('CompanyEmpInfo', {
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
        },
        employeeName:{
            type:Datatypes.STRING,
            allowNull:false
        },
        mobileNumber:{
            type:Datatypes.BIGINT,
            allowNull: false   
        },
        employeeEmail:{
            type:Datatypes.STRING
        },
        employeePassword:{
            type:Datatypes.STRING
        },
        address:{
            type:Datatypes.TEXT
        },
        DOB:{
            type:Datatypes.DATEONLY,
            allowNull:false
        },
        DOJ:{
            type:Datatypes.DATEONLY,
            allowNull:false
        },
        adminAccess:{
            type:Datatypes.ENUM,
            values:['Yes','No']
        },
        avatar:{
            type:Datatypes.STRING
        }
    }, options);

    CompanyEmpInfo.associate = function(models) {
        // associations can be defined here
        CompanyEmpInfo.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
    };

    return CompanyEmpInfo;
}