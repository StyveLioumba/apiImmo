const express = require('express');
const router = express.Router();

const advantage_controller = require('../controllers/advantage.controller');

router.get('/',advantage_controller.allAdvantages);
router.post('/',advantage_controller.addAdvantage);
router.put('/:id',advantage_controller.updateAdvantage);
router.delete('/:id',advantage_controller.deleteAdvantage);

module.exports = router;