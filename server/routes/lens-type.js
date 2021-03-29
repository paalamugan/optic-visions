const router = require('express-promise-router')();
const LensType= require('../controllers/lens-type');

router.route("/get").get(LensType.getAllLensType)
router.route("/add").post(LensType.addNew)
router.route("/update/:uuid").put(LensType.updateLensType)
router.route("/delete/:uuid").delete(LensType.deleteLensType)
router.route("/find/findone").get(LensType.findLensType);
    
module.exports = router; 