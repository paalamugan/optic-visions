// Redis Client

'use strict';

const redis = require('redis');
const config = require('../config');

const options = {
    url: config.redis.url,
    password: config.redis.password
}

const client = redis.createClient(options);

client.on("connect", function () { 
    console.log("Redis database connected");
})

client.on('error', function (err) {
    console.error('There was an error with the redis client ' + err);
});

module.exports = client;