=============================================================
## app.js

var express = require("express")
var path = require('path')
var app = express()

var {users, tasks} = require('./data') 

app.use(logger('dev'))
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


=============================================================
## data.js

var tasks=[
    {title:"clean the house"},
    {title:"reading an article"},
    {title:"do nothing"}
]

var users=[
    {name: "Amy"},
    {name: "Lucy"},
    {name: "Kat"}
]
module.exports= {tasks,users}

=============================================================
 ## index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    123
</body>
</html>
