var express = require("express")
var path = require('path')
var app = express()

app.use((req,res,next)=>{
    console.log(req.method + ":" + req.url +" " +new Date().toLocaleDateString())
    next()
})

app.get("/", (req,res)=>{
    //res.send("Hello world")
    console.log(path.resolve(__dirname,"index.html"))
    res.sendFile(path.resolve(__dirname,"index.html"))
})

app.listen(3000,()=>{
    console.log("server is listening http://localhost:3000")
})
