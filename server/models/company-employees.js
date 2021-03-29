module.exports = (sequelize, Datatypes, options = {}) => {

    const CompanyEmployee = sequelize.define('CompanyEmployee', {
        employeename:{
            type:Datatypes.STRING,
            allowNull:false
        },
        DOB:{
            type:Datatypes.STRING,
            allowNull:false
        },
        mobilenumber:{
            type:Datatypes.BIGINT,
            allowNull:false
        },
        loginname:{
            type:Datatypes.STRING,
            allowNull:false
        },
        password:{
            type:Datatypes.STRING,
            allowNull:false
        },
        pancard:{
            type:Datatypes.STRING
        },
        DOJ:{
            type:Datatypes.DATE
        },
        address:{
            type:Datatypes.TEXT
        },
        email:{
            type:Datatypes.STRING
        },
        adminAccess:{
            type:Datatypes.ENUM,
            values:['yes','no']
        },
        lastmodifiedpassword:{
            type:Datatypes.DATE
        }
    }, options);

    CompanyEmployee.associate = function(models) {
        // associations can be defined here
    };

    return CompanyEmployee;
}