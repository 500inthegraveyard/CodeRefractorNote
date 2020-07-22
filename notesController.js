//  jshint esversion:8

const express = require('express');
const router = express.Router();
const notes = require("./notes.js");



router.get("/api/notes", (req, res) => {
    notes.selectAll()
        .then(results => res.json(results))
        .catch(err => res.json(err))
});

router.post("/api/notes", (req, res) => {
    console.log(req.body);

    notes.create(["title", "text"], [req.body.title, req.body.text])
        .then(result =>{
            console.log(result);
            res.json({
                id: result.insertId
            })
        })
        .catch(err => res.json(err))
});
    router.delete("/api/notes/:id", (req, res) => {
   console.log(req.params.id);
        notes.removeNote([req.params.id])
        .then((result) => res.json(result))
        .catch((err) => res.status(500).json(err));
});
  
module.exports=router;