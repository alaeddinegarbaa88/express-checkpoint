// Import the Express library.
const express = require("express");
const daterequire = require ('./Views/middleWare/date')

// Initializing the app.
const app =express()


//Servers Rootes
// Getting the path request and sending the response with text
app.get('/', daterequire,(req,res)=>{
    res.send ("<h1>Hello, it's my new server</h1>")
})

app.get('/home',daterequire, (req,res)=>{
    res.sendFile (__dirname+'/Views/home.html')
})

app.get('/Contact',daterequire, (req,res)=>{
    res.sendFile (__dirname+'/Views/Contact.html')
})
app.get('/Services',daterequire, (req,res)=>{
    res.sendFile (__dirname+'/Views/Services.html')
})

//port
app.listen(5000,err=>{
    err?console.log(err):console.log("Server is running on http://localhost:5000")
})