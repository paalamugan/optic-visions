const { CronJob } = require('cron');
const http = require('http');
const https = require('https');
const config = require('../config');

let doActivity = () => {
    const service = process.env.NODE_ENV === 'production' ? https : http;
    const req = service.get(config.siteUrl);
    req.end();
    // req.once('response', (res) => {
    //     const ip = req.socket.localAddress;
    //     const port = req.socket.localPort;
    //     console.log(`Your IP address is ${ip} and your source port is ${port}.`);
    //     console.log("SITE_URL", process.env.SITE_URL)
    // });
}

// Daily
let dailyJob = new CronJob({
    cronTime: '0 0 * * *',
    onTick: doActivity,
    start: false,
    timeZone: 'UTC'
});
dailyJob.start();