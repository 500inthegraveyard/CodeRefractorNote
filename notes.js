// jshint esversion:6

const orm = require("./orm.js");

class notes {
    selectAll() {
        return orm.selectAll("notes");
    }
    create(columns, values) {
        return orm.create("notes", columns, values);
    }
    // update(objColVals, condition) {
    //     return orm.update("notes", objColVals, condition)
    // }
    removeNote(value) {
        return orm.delete("notes", 'id', value);
    }

}

module.exports = new notes();