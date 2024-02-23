const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/', require('./auth'));
router.use('/', require('./category'));
router.use('/', require('./products'));

module.exports = router;
