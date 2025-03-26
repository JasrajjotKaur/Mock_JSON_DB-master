const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const userRouter = require('./routes/users.js')
const app = express();

//setup our view engine
app.set('view engine', 'ejs');
app.set('views', "./views");


app.use(express.static('public'));
app.use(userRoutes);

app.listen(PORT, ()=>{
    console.log(`Connected to port: ${PORT}`);
});