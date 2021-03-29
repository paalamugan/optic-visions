const express = require("express");
const morgan = require("morgan");
const createError = require('http-errors');
const path = require("path");
const session = require("express-session");
const config = require('./config');
const app = express();

const env = process.env.NODE_ENV || 'development';
const MONTH_IN_MILLISECONDS = 2629743000;

global.rootPath = path.resolve(__dirname);

app.set('env', env);

// Logging
if (env === 'development') {
    app.use(morgan('dev',  {
        skip: function (req, res) {
            return req.path.indexOf('.') !== -1;
        }
    }));
} else {
    // For production and staging
    app.use(morgan('[:date[iso]] :method :url :status :res[content-length] :response-time ms', {
        skip: function (req, res) {
            // return res.statusCode < 400;
            return req.path.indexOf('.') !== -1;
        },
        stream: require('fs').createWriteStream('/var/log/app/api_logstash.log', {
            flags: 'a'
        })
    }));
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", express.static(path.join(__dirname, "public")));

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: config.sessionSecret,
    cookie: {
        maxAge: MONTH_IN_MILLISECONDS,
        // domain: config.cookieDomain
    },
    // store: new RedisStore({
    //     // host: config.redis.hostname,
    //     // port: config.redis.port,
    //     // pass: config.redis.password,
    //     client: redisClient
    // })
}));

// models
require("./models");

//routes
require("./routes")(app);

// const companyinfo = require("./routes/company-info");
// const employeeinfo = require("./routes/employee-info");
// const productList = require("./routes/product-list");
// const frameType = require("./routes/frame-type");
// const frameMaterial = require("./routes/frame-material");
// const salesOrder = require("./routes/sales-order");
// const customer = require("./routes/customer");
// const brand = require("./routes/brand");
// const framemodel = require("./routes/frame-model");
// const Lenstype = require("./routes/lens-type");
// const boxes = require("./routes/box-model");


//Signup
// app.use("/api/company",companyinfo);
// app.use("/api/company", companyinfo);
// app.use("/api/company/update",companyinfo);
//Login/
// app.use("/api/company",companyinfo);
// app.use("/api/company",companyinfo);
// app.use("/api/company",companyinfo);

//Employee
// app.use("/api/employee", employeeinfo);
// app.use("/api/employee/get",employeeinfo);
// app.use("/api/employee/update",employeeinfo);
// app.use("/api/employee/delete",employeeinfo);
// app.use("/api/employee/getone",employeeinfo);

//Brand
// app.use("/api/brand/add", brand);
// app.use("/api/brand/update", brand);
// app.use("/api/brand/delete", brand);
// app.use("/api/brand/get", brand);

//FrameModel
// app.use("/api/framemodel/find", framemodel);
// app.use("/api/framemodel/add", framemodel);
// app.use("/api/framemodel/update", framemodel);
// app.use("/api/framemodel/delete", framemodel);
// app.use("/api/framemodel/get", framemodel);

//LensType
// app.use("/api/lenstype/find", Lenstype);
// app.use("/api/lenstype/add", Lenstype);
// app.use("/api/lenstype/update", Lenstype);
// app.use("/api/lenstype/delete", Lenstype);
// app.use("/api/lenstype/get", Lenstype);

//Boxes
// app.use("/api/boxes/add", boxes);
// app.use("/api/boxes/update", boxes);
// app.use("/api/boxes/delete", boxes);
// app.use("/api/boxes/get", boxes);
// app.use("/api/boxes/getone", boxes);

//Customer:
// app.use("/api/customer", customer);
// app.use("/api/customer/find", customer);

//ProductList
// app.use("/api/productlist/new", productList);
// app.use("/api/productlist/update", productList);
// app.use("/api/productlist/delete", productList);
// app.use("/api/productlist/listall", productList);

//FrameType
// app.use("/api/frametype/add", frameType);
// app.use("/api/frametype/update", frameType);
// app.use("/api/frametype/delete", frameType);
// app.use("/api/frametype/get", frameType);

//FrameMaterial
// app.use("/api/framematerial/add", frameMaterial);
// app.use("/api/framematerial/update", frameMaterial);
// app.use("/api/framematerial/delete", frameMaterial);
// app.use("/api/framematerial/get", frameMaterial);

//Sales Order:
// app.use("/api/salesorder/new", salesOrder);
// app.use("/api/salesorder/findall", salesOrder);
//app.use("/api/salesorder/findallbyyear",salesOrder);
//app.use("/api/salesorder/findallbymonth",salesOrder);

/*const customerRoute       = require("./routes/customerroute");
const eyePrecriptionRoute = require("./routes/eyeprecriptionroute");
const invoiceOrderRoute   = require("./routes/invoiceorderroute");
//const productType         = require("./routes/producttyperoute");
const productItem         = require("./routes/productitemroute");
const salesProductOrder   = require("./routes/salesproductroute");*/

//need to remove belkow
/*app.use("/api/customer/add",customerRoute);
app.use("/api/customer/getallcustomer",customerRoute);
app.use("/api/customer",customerRoute);
app.use("/api/customer/delete",customerRoute);
app.use("/api/customer/update",customerRoute);

//For Eye Prescription

app.use("/api/eyeprescription/add",eyePrecriptionRoute);
app.use("/api/eyeprescription/update",eyePrecriptionRoute);
app.use("/api/eyeprescription/displayall",eyePrecriptionRoute);
app.use("/api/eyeprescription/display",eyePrecriptionRoute);

//For invoice Order

app.use("/api/invoiceorder/findAll",invoiceOrderRoute);
app.use("/api/invoiceorder/addnewinvoice",invoiceOrderRoute)

// For Product Type 

/*app.use("/api/product/addnew",productType);
app.use("/api/product/findAll",productType);
app.use("/api/product/delete",productType);
app.use("/api/product/update",productType);*/

/*
const customer = require('./routes/customerroute');
const eyepowerroute = require('./routes/eyepowerroute');
app.use(bodyParser.json());

//
app.use('/api/customer/add', customerroutes);
app.use('/api/customer/getall', customerroutes);

app.use('/api/eyepower/register', eyepowerroute);
app.use('/api/get/eyepowers', eyepowerroute);
*/

// Health check

app.use('/api/health', function (req, res, next) {
    res.send('OK');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page

  res.status(err.status || res.status || 400);
  res.json({ error: err.message || err });
});

module.exports = app;
