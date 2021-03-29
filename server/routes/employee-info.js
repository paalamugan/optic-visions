const router = require('express-promise-router')();
const EmployeeController = require('../controllers/company-emp');
const { UploadImage } = require('../middleware');

router.route("/add").post(UploadImage, EmployeeController.addNewEmployee)
router.route("/get").get(EmployeeController.getAllEmpDetails)
router.route("/employee-login").post(EmployeeController.Employeelogin)
router.route("/getone/:id").get(EmployeeController.getEmpDetails)
router.route("/update/:id").put(EmployeeController.updateEmpDetails)
router.route("/delete/:id").delete(EmployeeController.deleteEmpDetails)

module.exports = router;