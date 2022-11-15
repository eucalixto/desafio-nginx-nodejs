const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
}
const mysql = require('mysql');

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config);
    const insertPeople = `INSERT INTO people (name) values ('DOCKER')`;
    const selectPeople = `SELECT * FROM people`;
    connection.query(insertPeople);
    connection.query(selectPeople, (err, result, fields) => {
        if (err) throw err;
        let names= "<br><ul>";
        for (let i = 0; i < result.length; i++) {
            names += `<li>Nome: ${result[i].name}</li>`;
        }
        names += '</ul>';
        res.send(`<h1>Full Cycle Rocks!</h1> ${names}`);
    });
    connection.end();
})

app.listen(port, () => {
    console.log('Rodando na porta 3000')
})