const router = require('express-promise-router')();
const InvoiceOrderController = require('../controllers/invoiceordercontroller');


router.route('/')
.get(InvoiceOrderController.getInvoiceList)
.post(InvoiceOrderController.addinvoiceorder);

module.exports = router;