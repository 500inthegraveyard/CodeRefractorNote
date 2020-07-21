// jshint esversion:6

const connection = require('./connection.js');

// ORM classes for all our SQL statement functions
class ORM {
    constructor(connection) {
        this.connection = connection;
    }

    printQuestionMarks(numberofValues) {
        const questionMarks = [];

        for (var i = 0; i < numberofValues; i++) {
            questionMarks.push("?");
        }
        return questionMarks.join(', ');
    }

    selectAll(table){
        const queryString = 'SELECT * FROM  ??';
        console.table(table);
        return this.connection.query(queryString, [table]);
        
     }
      

    // query to create a table 
    create(Notes, Title, Text ) {
        // insert into notes (id,title,text) values (1,hello,world)
        const queryString = `Insert into ?? (${Title.join(',')})VALUES(${this.printQuestionMarks(Text.length)})`;
        console.log(queryString);
        return this.connection.query(queryString, [Notes, ...Text]);
    }

    update(table, objColVals, id) {
        var queryString = `UPDATE ?? SET ? WHERE ?`;
    
        console.log(queryString);
    
        return this.connection.query(queryString, [table, objColVals, id])
      }

}

module.exports=new ORM(connection);