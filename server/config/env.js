const env = {
    database:'opticvisions',
    username:'paalan',
    password: 'sremugaan@123',
    host:'localhost',
    dialect:'postgres', //mysql
    pool:{
        max :5,
        min:0,
        idle:10000,
        acquire:30000
    },
    JWT_KEY:"secret",
    DATABASE_URL: process.env.DATABASE_URL || "postgres://paalan:sremugaan@123@localhost:5432/opticvisions"

};

module.exports = env;