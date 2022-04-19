const express = require('express');
const server = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "nailton123",
    database: "crudgames",
});

server.use(express.json());
server.use(cors());

server.get("/", (req,res) => {
    res.send("Hello");
});

server.post("/register", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let sql = "INSERT INTO games (name, cost, category) VALUES (?,?,?)"
    db.query(sql, [name, cost, category], (err,result) =>{
        console.log(err);
        console.log(result);
    })
});

server.listen(3001, () =>
    console.log("Running in the port 3001")
);