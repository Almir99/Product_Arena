// require necessary modules
const express = require('express');

// require controller
const { authControllers } = require('../controllers');

// configure express application
const router = express.Router({ mergeParams: true });

// define auth routes
router.post('/register', authControllers.register);
router.post('/login', authControllers.login);

// export auth routes
module.exports = router;
