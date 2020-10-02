const mongoose = require("mongoose");
const express = require("express")
const app = express();



// const DB = "mongodb://localhost:27017/startup"; when mongodb is running in local
const DB = "mongodb://mymongo:27017/startup"; // when mongodb is running in docker 

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    console.log(":: error in DB connection");
  });


  app.get("/",(req, res)=>{
    res.json({message:"You are visiting ROOT route"})
  })
  app.listen(8000,()=>{
    console.log("server is running at port : 8000")
  })