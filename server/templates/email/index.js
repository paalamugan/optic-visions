const moment = require('moment');
const _ = require('lodash');
const path = require('path');
const Email = require('email-templates');
// const minify = require('html-minifier').minify;
const config = require('../../config');
const defaultData = require('./data');

const getTemplateData = (data) => {

    data = data || {};

    data.locale = data.locale || "en";
    data.siteUrl = data.siteUrl || config.siteUrl;
    data.appName = data.appName || 'Optic Visions';
    data._ = _;
    data.moment = moment;
    data.copyrightYear = (new Date()).getFullYear();

    return data;

};

const email = new Email({
    views: {
        root: path.join(__dirname, 'views')
    },
    juice: true,
    juiceResources: {
        preserveImportant: true,
        webResources: {
            relativeTo: path.join(__dirname, 'views')
        }
    },
    i18n: {},

    // message: {
    //     from: 'no-reply@gmail.com'
    // },
    // // uncomment below to send emails in development/test env:
    // // send: true,
    // transport: {
    //     jsonTransport: true
    // }
});

// const minifyOptions = {
//     removeComments: true,
//     collapseBooleanAttributes: true,
//     // collapseInlineTagWhitespace: true,
//     // collapseWhitespace: true,
//     // removeAttributeQuotes: true,
//     // removeTagWhitespace: true,
//     // useShortDoctype: true,
//     // minifyURLs: true,
//     // minifyCSS: true
// };

const emailTemplate = async (templateName, templateData) => {

    if (typeof templateName !== "string") {
        throw new Error("First parameter must be a string!");
    }

    let templateObj = defaultData[templateName];

    if (!templateObj) {
        throw new Error(`Invalid template name: ${templateName}!. template name must be mention inside data.js file.`);
    }

    templateData = getTemplateData(_.assign({}, templateObj, templateData));

    try {
        let html = email.render(templateName, templateData);
        // html = minify(html, minifyOptions);
        return html;
    } catch (err) {
        throw err;
    }
};

module.exports = emailTemplate;








