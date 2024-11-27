const express = require('express');
const Model = require('../models/PetModel');
const router = express.Router();

//add
router.get('/add', (req, res) => {
    console.log(req.body);
    
})