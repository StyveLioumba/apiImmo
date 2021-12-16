const express = require('express');
const router = express.Router();

const role_controller = require('../controllers/role.controller');

router.get('/',role_controller.allRoles);
router.post('/',role_controller.addRoles);
router.put('/:id',role_controller.updateRole);
router.delete('/:id',role_controller.deleteRole);

module.exports = router;