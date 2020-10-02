const express = require("express");
const app = express();

app.get("/",(req,res)=>{
res.json({
    message:"You are visiting route."
})
})

app.get("/",(req,res)=>{
res.json({
    message:"You are visiting route."
})
})

app.get("/login",(req,res)=>{
res.json({
    message:"You are visiting login."
})
})

app.get("/signup",(req,res)=>{
res.json({
    message:"You are visiting signup."
})
})

app.get("/logout",(req,res)=>{
res.json({
    message:"You are visiting logout."
})
})

app.listen(8000, ()=>console.log("started node server at port :8000"));