var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
var destinationController = require('../controllers/destinations');

//api route
router.route('/destination/:searchTerm')
	.get(destinationController.index);

router.route('/destination/:id')
	.post(destinationController.add);


//user route
router.route('/users')
	.post(userController.create)

router.route('/users/:id')
	.get(userController.show);

module.exports = router;