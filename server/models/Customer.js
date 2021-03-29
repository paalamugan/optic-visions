module.exports = (sequelize, Datatypes, options = {}) => {

    const Customer = sequelize.define('Customer', {
        name :{
           type :Datatypes.STRING,
            allowNull: false
        },
        mobilenumber :{
            type :Datatypes.STRING,
             allowNull: false
         },
         location:{
             type:Datatypes.STRING
         }
        
    }, options);

    Customer.associate = function(models) {
        // associations can be defined here
        Customer.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
    };

    return Customer;
}