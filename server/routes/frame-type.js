const router = require('express-promise-router')();
const FrameType= require('../controllers/frame-type');

router.route("/add").post(FrameType.addNew)
router.route("/update/:frametypeId").put(FrameType.updateFrameType)
router.route("/delete/:frametypeId").delete(FrameType.deleteFrameType)
router.route("/get/:companyId").get(FrameType.getAllFrameType);

module.exports = router; 