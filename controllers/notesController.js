//  jshint esversion:8

const express = require('express');
const router = express.Router();
const notes = require("../models/notes.js");



router.get("/api/notes", (req, res) => {
    notes.selectAll()
        .then(results => res.json(results))
        .catch(err => res.json(err))
});

router.post("/api/notes", (req, res) => {
    console.log(req.body);

    notes.create(["text", "title"], [req.body.title, req.body.text])
        .then(result =>{
            console.log(result);
            res.json({
                id: result.insertId
            })
        })
        .catch(err => res.json(err))
});
router.delete("/notes/:id", (req, res) => {
    notes.removeNote(req.params.id)
        .then(() => res.json({
            ok: true
        }))
        .catch((err) => res.status(500).json(err));
});
module.exports=router;