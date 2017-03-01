var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
var destinationController = require('../controllers/destinations');

router.route('/destination/:searchTerm')
	.get(destinationController.index);

router.route('/users')
	.post(userController.create)

// router.route('/user/:id')
// 	.get(userController.show)
// 	.put(userController.update)
// 	.delete(userController.delete);

module.exports = router;