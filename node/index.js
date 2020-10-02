const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Visiting Route</h1>");

})


app.listen(8000, ()=>console.log("started node server at port :8000"));