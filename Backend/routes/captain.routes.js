const express = require("express");
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be atleast 3 character long'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 character long'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be atleast 3 character long'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be atleast 3 character long'),
    body('vehicle.capacity').isNumeric().withMessage('capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type')
]
,captainController.registerCaptain
)

module.exports = router;