const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');



//render our home page
router.get('/', (req, res)=>{
    res.render('home');
});

//post route handler to create a new user
router.post('/users', userController.createUser);


module.exports = router;