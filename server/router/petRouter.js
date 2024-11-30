const express = require('express');
const Model = require('../models/PetModel');
const router = express.Router();

//add
router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err);
        })
});

//getall
router.get('/getall', (req, res) => {
    console.log(req.body);
    Model.find()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err);
        })
});

//update
router.put('/update', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err);
        })
});

//delete
router.delete('/delete/:id', (req, res) => {
    console.log(req.body);
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err);
        })
});

//getbyid
router.get('/delete/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;