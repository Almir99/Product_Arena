// require necessary modules
const express = require('express');

// require controller
const { diseaseControllers } = require('../controllers');

// configure express application
const router = express.Router({ mergeParams: true });

// define auth routes
router.post('/', diseaseControllers.createDisease);
router.get('/', diseaseControllers.getDiseases);

// export auth routes
module.exports = router;
