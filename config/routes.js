var express = require('express');
var router = express.Router();

//destinations
router.route('/')
	.get(destinationsController.index)
	.post(destinationsController.create)