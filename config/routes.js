var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.route('/user')
	.get(userController.index);

router.route('/user/:id')
	.get(userController.show)
	.put(userController.update)
	.delete(userController.delete);

module.exports = router;