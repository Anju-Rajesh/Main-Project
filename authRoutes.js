const express=require('express')
const router = require('./testRoutes')

const routes=express.Router()

const { registerController ,loginController} = require('../controllers/authController');

//routes
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);


module.exports=router