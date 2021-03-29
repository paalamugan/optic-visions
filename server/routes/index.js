const { CheckAuth } = require('../middleware');

const CompanyInfo = require("./company-info");
const EmployeeInfo = require("./employee-info");
const ProductList = require("./product-list");
const FrameType = require("./frame-type");
const FrameMaterial = require("./frame-material");
const SalesOrder = require("./sales-order");
const Customer = require("./customer");
const Brand = require("./brand");
const Framemodel = require("./frame-model");
const LensType = require("./lens-type");
const Boxes = require("./box-model");

module.exports = (app) => {
    app.use("/api/*", CheckAuth);
    app.use("/api/company", CompanyInfo);
    app.use("/api/employee", EmployeeInfo);
    app.use("/api/brand", Brand);
    app.use("/api/frame-model", Framemodel);
    app.use("/api/lens-type", LensType);
    app.use("/api/boxes", Boxes);
    app.use("/api/customer", Customer);
    app.use("/api/product-list", ProductList);
    app.use("/api/frame-type", FrameType);
    app.use("/api/frame-material", FrameMaterial);
    app.use("/api/sales-order", SalesOrder);
}