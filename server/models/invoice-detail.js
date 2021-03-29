module.exports = (sequelize, Datatypes, options = {}) => {

    const InvoiceDetail = sequelize.define('InvoiceDetail', {
        invoiceNo:{
            type:Datatypes.STRING,
            allowNull:false
        },
        invoiceDate:{
            type:Datatypes.DATE,
            allowNull :false
        },
        salesman:{
            type:Datatypes.STRING,
            allowNull:false
        },
    }, options);

    InvoiceDetail.associate = function(models) {
        // associations can be defined here
        InvoiceDetail.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
    };

    return InvoiceDetail;
}