const env={
    database:'opticalvision',
    username:'paalan',
    password: 'sre@123',
    host:'localhost',
    dialect:'mysql',
    pool:{
        max :5,
        min:0,
        idle:10000,
        acquire:30000
    },
    JWT_KEY:"secret"

};

module.exports = env;