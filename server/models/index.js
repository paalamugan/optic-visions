'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require(global.rootPath + '/config');

const basename = path.basename(__filename);
const options = {
    // host: config.dbHost,
    dialect: config.dbDialect,
    // operatorAliases: Sequelize.Op,
    define: {
        timestamps: true
    },
    pool: {
        max :5,
        min:0,
        idle:10000,
        acquire:30000
    }
}

const modelOptions =  {
    paranoid: true,
    underscored: true
}

const db = {};
let sequelize;

if (process.env.NODE_ENV === "production") {
    options.dialectOptions = {  ssl: {
        rejectUnauthorized: false, // very important
      }
    };
    sequelize = new Sequelize(config.dbUrl, options);
} else {
    sequelize = new Sequelize(config.dbName, config.dbUserName, config.dbPassword, options);
}

if (db.sequelize) return db;

fs
.readdirSync(__dirname)
.filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes, modelOptions);
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.authenticate().then(() => {
    console.log("Connection established sucessfully");
    sequelize.sync({ force: true }); // if force values is true, it will drop all exist table and create new table, if false Only create table if not exist.  
}).catch((err)=>{
    console.error("Some thing problem in database connection", err);
});

module.exports = db;
