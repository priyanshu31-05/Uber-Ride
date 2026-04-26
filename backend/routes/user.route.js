const express = require("express");
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware')
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min : 3}).withMessage('first name required'),
    body('password').isLength({min : 3}).withMessage('password must required')
    
],
userController.registerUser);

router.post("/login",[
     body('email').isEmail().withMessage('Invalid Email'),
      body('password').isLength({min : 3}).withMessage('password must required')
],userController.loginUser);

router.get('/getProfile',authMiddleware.authUser, userController.getUserProfile);

router.post('/logout', authMiddleware.authUser, userController.logoutUser)

module.exports = router