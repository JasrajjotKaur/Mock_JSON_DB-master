const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const { readData } = require('../utils/file.js');

router.use(express.urlencoded({extended: true}));
router.use(express.json());

//render our home page
router.get('/', (req, res)=>{
    res.render('home');
});

//get route to expose our api endpoint
router.get('/api/v1/users' , async (req, res) =>{
    try {
        const data = await readData();
        res.json(data);
    } catch (error) {
    res.status(500).json('Internal Server Error');
}
});

//post route handler to create a new user
router.post('/users', userController.createUser);





module.exports = router;