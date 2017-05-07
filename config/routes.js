var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
var destinationController = require('../controllers/destinations');

//api route
router.route('/destination/:searchTerm')
	.get(destinationController.index);

router.route('/destination')
	.get(destinationController.index);

router.route('/destination/:id')
	.post(destinationController.add);
	
router.route('/users/:uid/destination/:id')
	.delete(destinationController.delete)
	.get(destinationController.display);

//user route
router.route('/users')
	.post(userController.create)

router.route('/users/:id')
	.get(userController.show);

module.exports = router;