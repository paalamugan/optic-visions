module.exports = (sequelize, Datatypes, options = {}) => {

    const OrderStatus = sequelize.define('OrderStatus', {
        deliverydate:{
            type:Datatypes.DATE,
            allowNull:false
        },
        itemDetails:{
            type:Datatypes.JSON,
            allowNull:false
        },
        status:{
            type:Datatypes.ENUM,
            values:['pending','delivered']
        },
        balanceAmount:{
            type:Datatypes.INTEGER
        }
    }, options);

    OrderStatus.associate = function(models) {
        // associations can be defined here
    };

    return OrderStatus;
}