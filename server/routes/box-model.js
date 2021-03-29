const router = require('express-promise-router')();
const BoxModel= require('../controllers/box-model');

router.route("/add").post(BoxModel.addNew)
router.route("/get").get(BoxModel.getAllBoxModel)
router.route("/update/:uuid").put(BoxModel.updateBoxModel)
router.route("/delete/:uuid").delete(BoxModel.deleteBoxModel);

module.exports = router; 