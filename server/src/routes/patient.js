// require necessary modules
const express = require('express');

// require controller
const { patientControllers } = require('../controllers');

// configure express application
const router = express.Router({ mergeParams: true });

// define auth routes
router.post('/', patientControllers.createPatient);
router.get('/', patientControllers.getPatients);

// export auth routes
module.exports = router;
