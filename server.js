// jshint esversion:6

/* ----------------------------Dependencies---------------------------------------------- */
const express = require("express");
const path = require("path");
const app = express();
const fs = require('fs');
app.use(express.json());
const db = require('./db.json');
const port = process.env.PORT || 3001;
// const {
//     notes
// } = require("joi");
const noteController=require("./notesController");
/* -------------------------------------------------------------------------- */
// Sets up the Express app to handle data parsing; middelware functions
/* -------------------------------------------------------------------------- */
app.use(express.urlencoded({
    extended: true
}));

/* -------------------------------------------------------------------------- */
// look for all the static files in the directory
/* -------------------------------------------------------------------------- */

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, "db")));
app.use(noteController);
/* ----------------------------- set empty array ---------------------------- */
let newNote = [];
/* -------------------------------------------------------------------------- */

// ──────────────────────────────────────────────────────────── I ──────────
//   :::::: S E T   R O U T E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
/* -------------------------------------------------------------------------- */
// http request; serves browser with home page
/* -------------------------------------------------------------------------- */
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

/* -------------------- http request; serves browser with /notes page-------------------- */

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// The next step should be the data that is entered by the user needs to come back to the 
// server ; add it to the .json file and send it back to the browser?
/* ------------send back json data---------------- */
app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./db/schema.sql"));
});

/* ------------------------------- post method ------------------------------ */


// app.delete("/api/notes/:id", function (req, res) {
//     const deleteId = req.params.id;
//     fs.readFile("./db/db.json", "utf8", function (error, response) {
//         if (error) {
//             console.log(error);
//         }
//         let notes = JSON.parse(response);
//         if (deleteId <= notes.length) {
//             res.json(notes.splice(deleteId - 1, 1));
//             // Reassign the ids of all notes  
//             for (let i = 0; i < notes.length; i++) {
//                 notes[i].id = i + 1;
//             }
//             fs.writeFile("./db/db.json", JSON.stringify(notes, null, 2), function (err) {
//                 if (err) throw err;
//             });
//         } else {
//             res.json(false);
//         }
//     });
// });

// ======================Listening Ports=======================================

app.listen(port, () => console.log(`listening on port ${port}...`));