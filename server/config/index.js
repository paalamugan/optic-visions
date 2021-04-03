module.exports = {
    siteUrl: process.env.SITE_URL || "http://localhost:9000",
    dbUrl: process.env.DATABASE_URL || "postgres://root:root@localhost:5432/opticvisions",
    dbHost: process.env.DATABASE_HOST || "localhost",
    dbName: process.env.DATABASE_NAME || "opticvisions",
    dbUserName: process.env.DATABASE_USER_NAME || "root",
    dbPassword: process.env.DATABASE_PASSWORD || "root",
    dbDialect: "postgres", // mysql
    jwtSecretKey: process.env.JWT_SECRET_KEY || "secret",
    sessionSecret: process.env.SESSION_SECRET_KEY || "use-me-secretly",

    mailgun: { // all emails are delivered to destination (production)
        domain: 'mail.opticvisions.com',
        apiKey: process.env.MAILGUN_API_KEY,
        fromOpticVisions: 'Optic Visions <support@opticvisions.com>'
    },
    sendgrid: { // all emails are delivered to destination (production)
        domain: 'mail.opticvisions.com',
        apiKey: process.env.SENDGRID_API_KEY
        // host: 'smtp.sendgrid.net',
        // port: 587,
        // auth: {
        //     user: process.env.SENDGRID_USERNAME,
        //     pass: process.env.SENDGRID_PASSWORD
        // }
    },
    gmail: { // all emails are delivered to destination by gmail service (development)
        service: "gmail",
        auth: {
            user: process.env.APP_EMAIL, //youremail@gmail.com
            pass: process.env.APP_EMAIL_PASSWORD // Password
        },
        tls: {
            rejectUnauthorized: false,
        }
    },
    mailtrap: { // all emails are catched by mailtrap.io (development)
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env.MAILTRAP_USER || "",
            pass: process.env.MAILTRAP_PASSWORD || ""
        }
    },

}