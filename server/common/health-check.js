const { CronJob } = require('cron');
const http = require('http');
const https = require('https');
const config = require('../config');
console.log("config", config)
let doActivity = () => {
    const service = process.env.NODE_ENV === 'production' ? https : http;
    const req = service.get(`${config.siteUrl}/api/health`);
    req.end();
    // req.once('response', (res) => {
    //     const ip = req.socket.localAddress;
    //     const port = req.socket.localPort;
    //     console.log(`Your IP address is ${ip} and your source port is ${port}.`);
    //     console.log("SITE_URL", process.env.SITE_URL)
    // });
}

let thiryMinJob = new CronJob({
    cronTime: '*/30 * * * *',
    onTick: doActivity,
    start: false,
    timeZone: 'UTC'
});
thiryMinJob.start();