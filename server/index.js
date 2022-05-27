// This file is going to be the "entry point" for the server

const express = require("express");
const app = express();

const http = require("http");
const cors = require("cors");

app.get("/", (req, res) => {
   console.log("hihi");
   res.send("hihi");

});

const userRouter = require("./Routes/users");
const catFactsRouter = require("./Routes/catFactsApi");

app.use("/users", userRouter);
app.use("/cat_facts", catFactsRouter);

app.listen(3002);
