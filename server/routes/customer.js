const router = require('express-promise-router')();
const CustomerController = require('../controllers/customer');

router.route('/:name/company/:companyId')
    //.delete(CustomerController.deleteCustomer)
    .get(CustomerController.getCustomer)
    .put(CustomerController.updateCustomer);
    
router.route('/find/:companyId').get(CustomerController.findAllByCompany);

module.exports = router;



