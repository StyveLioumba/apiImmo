const express = require('express');
const router = express.Router();

const tag_controller = require('../controllers/tag.controller');

router.get('/',tag_controller.allTags);
router.post('/',tag_controller.addTag);
router.put('/:id',tag_controller.updateTag);
router.delete('/:id',tag_controller.deleteTag);

module.exports = router;