const router = require('express-promise-router')();
const ProductList = require('../controllers/product-list');

router.route("/new").post(ProductList.addNewProduct)
router.route("/listall").get(ProductList.getAllProductList)
router.route("/update/:productId").put(ProductList.updateProduct)
router.route("/delete/:productId").delete(ProductList.deleteProduct)    

module.exports = router; 