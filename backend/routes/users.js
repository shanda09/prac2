var express = require('express');
var router = express.Router();
var db = require("../db/queries");

router.get('/', function(req,res,next){
    res.send('respond with a resource');
});

router.get("/getAllNotes", db.getAllNotes);
router.post('/addNote',db.addNote );
router.get("/singlenote/:id", db.singlenote);
router.post("/deletenote/:id", db.deletenote);



module.exports = router;
