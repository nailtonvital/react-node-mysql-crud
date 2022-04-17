const express = require("express");
const server = express();

server.get('/', ((req, res) => {
    res.send("Hello World")
}))

server.listen(3001, () =>
    console.log("Running in the port 3001")
);