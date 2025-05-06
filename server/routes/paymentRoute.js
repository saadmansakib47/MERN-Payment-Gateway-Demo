const express = require('express');
const router = express.Router();
const {
  initiatePayment,
  successHandler,
  failHandler
} = require('../controllers/paymentController');

router.post('/initiate', initiatePayment);
router.post('/success', successHandler);
router.post('/fail', failHandler);

module.exports = router;
