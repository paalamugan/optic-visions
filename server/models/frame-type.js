module.exports = (sequelize, Datatypes, options = {}) => {

    const FrameType = sequelize.define('FrameType', {
        frametype:{
            type:Datatypes.ENUM,
            values:['halfrim','fullrim','rimless'],
            allowNull:false
            
        },
        price:{
            type:Datatypes.INTEGER,
            allowNull:false
        }
    }, options);

    FrameType.associate = function(models) {
        // associations can be defined here
        FrameType.belongsTo(models.CompanyUserInfo, { foreignKey: 'fk_companyid', targetKey: 'uuid', onDelete: 'CASCADE' });
    };

    return FrameType;
}