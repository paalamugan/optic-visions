module.exports = (sequelize, Datatypes, options = {}) => {

    const CompanyUserInfo = sequelize.define('CompanyUserInfo', {
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            // autoIncrement: true,
            primaryKey: true
        },

        companyName: {
            type :Datatypes.STRING,
            allowNull: false
        },

        userName: {
            type :Datatypes.STRING,
            allowNull: false
        },

        email:{
            type:Datatypes.STRING,
            allowNull: false
        },

        password:{
            type:Datatypes.STRING,
            allowNull: false
        },

        address:{
            type:Datatypes.TEXT
        },

        phoneNumber:{
            type:Datatypes.BIGINT 
        },

        tin:{
            type:Datatypes.STRING
        },

        avatar:{
            type:Datatypes.STRING
        }

    }, options);

    CompanyUserInfo.associate = function(models) {
        // associations can be defined here
    };

    return CompanyUserInfo;
}