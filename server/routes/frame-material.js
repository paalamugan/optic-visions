const router = require('express-promise-router')();
const FrameMaterial= require('../controllers/frame-material');

router.route("/add").post(FrameMaterial.addNew)
router.route("/get").get(FrameMaterial.getAllFrameMaterial)
router.route("/update/:framematerialId").put(FrameMaterial.updateFrameMaterial)
router.route("/delete/:framematerialId").delete(FrameMaterial.deleteFrameMaterial);

module.exports = router; 