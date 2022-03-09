# Web

var express = require('express')
var app = express()
app.use(express.json())
app.get('/',(req,res) => {
    res.send("Hello world")
})

app.get('/users/:id([0-9]{2,3}$)',(req,res) => {
    res.send(req.params.id)
})

app.get('/users/:name',(req,res) => {
    res.send(req.params.name)
})

app.put('/movie/1',(req,res) => {
    res.send("your put requset is served")
})

app.delete('/movie/1',(req,res) => {
    res.send("your delete requset is served")
})

app.post('/movie',(req,res) => {
    console.log(req.body)
    res.status(200).send('your post requset is served')
})

app.listen(3000, () => {
    console.log("in browser type http://localhost:3000/")
})

