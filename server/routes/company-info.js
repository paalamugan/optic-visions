const router = require('express-promise-router')();
const CompanyInfoController = require('../controllers/company-info');
const { UploadImage } = require('../middleware');

router.route("/register").post(UploadImage, CompanyInfoController.registerCompany);
router.route("/login").post(CompanyInfoController.Adminlogin);
router.route("/username").get(CompanyInfoController.Username);

router.route("/delete/:uuid").delete(CompanyInfoController.DeleteCompany);

router.route("/getone/:id").get(CompanyInfoController.getDetails);

router.route("/update/:companyId").put(CompanyInfoController.updateDetails);

router.route("/forget-password").post(CompanyInfoController.ForgetPassword);

router.route("/forget-password/:id")
.get(CompanyInfoController.GetForgetPassword)
.put(CompanyInfoController.UpdateForgetPassword)

module.exports = router;

