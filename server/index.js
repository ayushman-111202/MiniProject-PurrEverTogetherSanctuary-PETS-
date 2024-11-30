//importing routers, cors, express
const express = require('express');
const UserRouter = require('./router/userRouter');
const PetRouter = require('./router/petRouter');

//creating an express app
const app = express();
const port = 5000;

// middlewares
app.use(express.json());
app.use('/pets',PetRouter);


//route or endpoints
app.get('/',(req,res) => {
    res.send('response from express');
});

//add
app.get('/add',(req,res) => {
    res.send('response from add');
});

//getall
app.get('/getall',(req,res) => {
    res.send('response from getall');
});

//delete
app.get('/delete',(req,res) => {
    res.send('response from delete');
});

//update
app.get('/update',(req,res) => {
    res.send('response from update');
});

//starting the server
app.listen(port, () => {
    console.log("Server Started");
});

