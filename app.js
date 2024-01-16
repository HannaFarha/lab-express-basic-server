const express=require("express");

const morgan =require("morgan");
const path = require('path');
const app =express();

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

app.get("/",(req,res)=>{res.sendFile(path.join(__dirname + "/home.html"));});

app.get("/",(req,res)=>{res.sendFile(path.join(__dirname , '/blog.html'));});
app.get("/api/projects", (req,res) => {res.sendFile(path.join(__dirname +"/data/projects.json"));});
app.get("/api/articles", (req,res) => {res.sendFile(path.join(__dirname +"/data/articles.json"));});
app.get("*",(req,res)=>{res.sendFile(path.join(__dirname , '/not-found.html'));});

app.listen(5005,()=>{console.log("Server listening on port 5005")})