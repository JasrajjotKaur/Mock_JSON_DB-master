const express = require('express');
const router = express.Router();




// render our home page
router.get('/', (req, res)=>{
    res.render('home');
});




module.export = router;