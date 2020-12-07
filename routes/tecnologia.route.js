const express = require('express');
const router = express.Router();

const tecnologia_controller = require('../controllers/tecnologia.controller');

// EndPoints

router.post('/create', tecnologia_controller.create);

router.get('/:id', tecnologia_controller.details);

router.put('/:id/update', tecnologia_controller.update);

router.delete('/:id/delete', tecnologia_controller.delete);

module.exports = router;