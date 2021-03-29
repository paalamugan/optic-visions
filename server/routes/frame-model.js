const router = require('express-promise-router')();
const FrameModel= require('../controllers/frame-model');

router.route("/get").get(FrameModel.getAllFrameModel);
router.route("/add").post(FrameModel.addNew)
router.route("/update/:uuid").put(FrameModel.updateFrameModel);
router.route("/delete/:uuid").delete(FrameModel.deleteFrameModel);
router.route("/find/findone").get(FrameModel.findFrameModel)  

module.exports = router; 