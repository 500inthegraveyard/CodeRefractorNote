DROP DATABASE if EXISTS notes_db;
CREATE DATABASE notes_db;
USE notes_db;
CREATE TABLE notes(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    text VARCHAR (500) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO notes (id, title, text)
VALUES ('1', 'Hello', 'Hello World');

INSERT INTO notes (id, title, text)
VALUES ('2', 'Hello', 'Hello Hello');
SELECT * FROM  notes;

Insert into ?? (${columns.join(',')})VALUES(${this.printQuestionMarks(values.length)})