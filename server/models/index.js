"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config");
const { Client } = require("pg");

const basename = path.basename(__filename);
const options = {
  dialect: config.dbDialect,
  // operatorAliases: Sequelize.Op,
  define: {
    timestamps: true,
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
};

const modelOptions = {
  paranoid: true,
  underscored: true,
};

const db = {};
let sequelize;

options.dialectOptions = {
  ssl: {
    rejectUnauthorized: false,
  },
};
if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(config.dbUrl, options);
} else {
  sequelize = new Sequelize(config.dbUrl, options);
}

if (db.sequelize) return db;

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes, modelOptions);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const client = new Client({
  connectionString: config.dbUrl,
});

client.connect().then(() => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection established sucessfully");
      sequelize.sync({ force: false }); // if force values is true, it will drop all exist table and create new table, if false Only create table if not exist.
    })
    .catch((err) => {
      console.error("Some thing problem in database connection", err);
    });
});

module.exports = db;
