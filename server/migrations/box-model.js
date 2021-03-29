'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('box-models', {
            uuid: {
                type: Datatypes.UUID,
                defaultValue: Datatypes.UUIDV1,
                primaryKey: true
            },
            name:{
                type:Datatypes.STRING,
                allowNull:false
            },
            box_model:{
                type:Datatypes.STRING
            },
            quantity:{
                type:Datatypes.INTEGER,
            },
            retailerPrice:{
                type:Datatypes.INTEGER,
                allowNull:false
            },
            wholesalerPrice:{
                type:Datatypes.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('box-models');
    }
};