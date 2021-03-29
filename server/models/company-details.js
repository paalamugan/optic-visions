module.exports = (sequelize, Datatypes, options = {}) => {

    const CompanyDetail = sequelize.define('CompanyDetail', {
        companyname:{
            type:Datatypes.STRING,
            allowNull:false,
            primaryKey: true
        },
        owneremail:{
            type:Datatypes.STRING,
            allowNull:false
        },
        ownermobilenumber:{
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
        lastmodifiedpassword:{
            type:Datatypes.DATE
        }
    }, options);

    CompanyDetail.associate = function(models) {
        // associations can be defined here
    };

    return CompanyDetail;
}