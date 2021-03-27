const express = require("express");
const logger = require("morgan");
const createError = require('http-errors');
const path = require("path");
const session = require("express-session");
const app = express();

//const replaceall = require('replaceall');
const { db } = require("./db");

//routes
//const customer = req
//middleware

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist/OpticalVision")));
app.use("/", express.static(path.join(__dirname, "dist/OpticalVision")));

app.use(
  session({
    secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: true,
  })
);
//routes

const companyinfo = require("./routes/companyinforoute");
const employeeinfo = require("./routes/companyemproute");
const productList = require("./routes/productlistroute");
const frameType = require("./routes/frametyperoute");
const frameMaterial = require("./routes/framematerialroute");
const salesOrder = require("./routes/salesorderroute");
const customer = require("./routes/customerroute");
const brand = require("./routes/brandroute");
const framemodel = require("./routes/framemodelroute");
const Lenstype = require("./routes/lenstyperoute");
const boxes = require("./routes/boxmodelroute");

//Signup
// app.use("/api/visionapp/company/register",companyinfo);
app.use("/api/visionapp/company", companyinfo);
// app.use("/api/visionapp/company/update",companyinfo);
//Login/
// app.use("/api/visionapp/company",companyinfo);
// app.use("/api/visionapp/company",companyinfo);
// app.use("/api/visionapp/company",companyinfo);

//Employee
app.use("/api/visionapp/employee", employeeinfo);
// app.use("/api/visionapp/employee/get",employeeinfo);
// app.use("/api/visionapp/employee/update",employeeinfo);
// app.use("/api/visionapp/employee/delete",employeeinfo);
// app.use("/api/visionapp/employee/getone",employeeinfo);

//Brand
app.use("/api/visionapp/brand/add", brand);
app.use("/api/visionapp/brand/update", brand);
app.use("/api/visionapp/brand/delete", brand);
app.use("/api/visionapp/brand/get", brand);

//FrameModel
app.use("/api/visionapp/framemodel/find", framemodel);
app.use("/api/visionapp/framemodel/add", framemodel);
app.use("/api/visionapp/framemodel/update", framemodel);
app.use("/api/visionapp/framemodel/delete", framemodel);
app.use("/api/visionapp/framemodel/get", framemodel);

//LensType
app.use("/api/visionapp/lenstype/find", Lenstype);
app.use("/api/visionapp/lenstype/add", Lenstype);
app.use("/api/visionapp/lenstype/update", Lenstype);
app.use("/api/visionapp/lenstype/delete", Lenstype);
app.use("/api/visionapp/lenstype/get", Lenstype);

//Boxes
app.use("/api/visionapp/boxes/add", boxes);
app.use("/api/visionapp/boxes/update", boxes);
app.use("/api/visionapp/boxes/delete", boxes);
app.use("/api/visionapp/boxes/get", boxes);
app.use("/api/visionapp/boxes/getone", boxes);
//Customer:
app.use("/api/visionapp/customer", customer);
app.use("/api/visionapp/customer/find", customer);
//ProductList

app.use("/api/visionapp/productlist/new", productList);
app.use("/api/visionapp/productlist/update", productList);
app.use("/api/visionapp/productlist/delete", productList);
app.use("/api/visionapp/productlist/listall", productList);

//FrameType

app.use("/api/visionapp/frametype/add", frameType);
app.use("/api/visionapp/frametype/update", frameType);
app.use("/api/visionapp/frametype/delete", frameType);
app.use("/api/visionapp/frametype/get", frameType);

//FrameMaterial

app.use("/api/visionapp/framematerial/add", frameMaterial);
app.use("/api/visionapp/framematerial/update", frameMaterial);
app.use("/api/visionapp/framematerial/delete", frameMaterial);
app.use("/api/visionapp/framematerial/get", frameMaterial);

//Sales Order:
app.use("/api/visionapp/salesorder/new", salesOrder);
app.use("/api/visionapp/salesorder/findall", salesOrder);
//app.use("/api/visionapp/salesorder/findallbyyear",salesOrder);
//app.use("/api/visionapp/salesorder/findallbymonth",salesOrder);

//DUmmy Value
app.post("/api/visionapp/dummy/", (req, res, next) => {
  return res.send(req.body);
});
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

app.get('/api/health', function (req, res, next) {
    console.log("req", req.hostname, req.originalUrl)
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
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
