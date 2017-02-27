var express = require('express');
var router = express.Router();
var destinationsController = require('../controllers/destinations');

//destinations
router.route('/')
	.get(destinationsController.index)
	.post(destinationsController.create);

router.route('/new')
	.get(destinationsController.new);

router.route('/:id')
	.get(destinationsController.show)
	.put(destinationsController.update)
	.delete(destinationsController.delete);

router.route('/:id/edit')
	.get(destinationsController.edit);

module.exports = router;