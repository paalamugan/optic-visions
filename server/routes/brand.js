const router = require('express-promise-router')();
const Brand= require('../controllers/brand');

router.route("/get").get(Brand.getAllBrand)
router.route("/add").post(Brand.addNew)
router.route("/update/:uuid").put(Brand.updateBrand)
router.route("/delete/:uuid").delete(Brand.deleteBrand)

//     .get((CheckAuth),Brand.getAllBrand)

// router.route("/:uuid")
//     .put((CheckAuth),Brand.updateBrand)
//     .delete((CheckAuth),Brand.deleteBrand)
    
// router.route("/:companyId")
//     .get(FrameMaterial.getAllFrameMaterial)

module.exports = router; 