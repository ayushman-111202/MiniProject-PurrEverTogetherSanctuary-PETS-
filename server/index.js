//importing routers, cors, express
const express = require('express');
const UserRouter = require('./router/userRouter');
const PetRouter = require('./router/petRouter');
const cors = require('cors');


//creating an express app
const app = express();
const port = 5000;

// middlewares
app.use(cors({
    origin:['http://localhost:3000']
}));
app.use(express.json());
app.use('/pets',PetRouter);
app.use('/users',UserRouter);

//route or endpoints
app.get('/',(req,res) => {
    res.send('response from express');
});

//starting the server
app.listen(port, () => {
    console.log("Server Started");
});