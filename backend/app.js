const express = require('express')
const app = express()
const blogrouter = require('./myrouters')
const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://trustedward:Welcome2@cluster0.frrfw5f.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(1010, ()=>{
        console.log("connected to the server")
    })  
}).catch((err)=>{
    console.log(err)
    
})


app.use(express.json())

app.use('/api/blog', blogrouter)

