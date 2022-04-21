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

server.post("/register", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let sql = "INSERT INTO games (name, cost, category) VALUES (?,?,?)"
    db.query(sql, [name, cost, category], (err,result) =>{
        if (err) {
            console.log(err);
        }else{
            console.log(result);
        }
    })
});

server.get("/games", (req, res) => {

    let sql = "SELECT * FROM games";
    db.query(sql, (err,result) =>{
        if (err) {
            console.log(err);
        }else{
            res.send(result);
        }

    })
});

server.put("/edit", (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let sql = "UPDATE games SET name = ?, cost = ?, category = ? WHERE idgames = ?";
    db.query(sql, [name, cost, category, id], (err,result) =>{
        if (err) {
            console.log(err);
        }else{

            res.send(result);
        }
    })
});

server.delete("/delete/:index", (req,res) =>{
    const { index } = req.params

    let sql = "DELETE FROM games WHERE idgames = ?"
    db.query(sql, [index], (err,result) =>{err ? console.log(err) : res.send(result)})
})
server.listen(3001, () =>
    console.log("Running in the port 3001")
);