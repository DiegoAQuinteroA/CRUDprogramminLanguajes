const express = require('express');
const router = express.Router();
const programminLanguajes = require('../services/programmingLanguaje');

router.get('/', async function(req, res, next){
    try{
        res.json(await programminLanguajes.read(req.query.page));
    }catch(err){
        console.error("este es el error: " + err.message);
        next(err);
    }
});

router.post('/', async function(res, req, next){
    try{
        res.json(await programminLanguajes.create(req.body));
    }catch(err){
        console.error("este es el error: " + err.message);
        next(err);
    }
})

router.put('/', async function(res, req, next){
    try{
        res.json(await programminLanguajes.create(req.body.id, req.body));
    }catch(err){
        console.error("este es el error: " + err.message);
        next(err);
    }
})

module.exports = router;