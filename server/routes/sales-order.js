const router = require('express-promise-router')();
const SalesOrder = require('../controllers/sales-order');

router.route('/new').post(SalesOrder.newSalesOrder)
router.route('/findall/:companyId').get(SalesOrder.getAllSalesOrder)
router.route('/findall/year/:year/:companyId').get(SalesOrder.getAllSalesByYear)
router.route('/findall/month/:month/:companyId').get(SalesOrder.getAllSalesByMonth);

module.exports = router;