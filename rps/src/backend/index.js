const express = require("express");
const app = express();
const port = 3000;
const pool = require("./db/db");

const { userRouter } = require("./router");

app.listen(port, console.log("server running on port " + port));
