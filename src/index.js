const express = require('express')
const path = require('path')
const hbs = require('hbs')
const collection = require('./mongodb')
const app = express()

app.use(express.static(path.join(__dirname, '../public')));

const templatePath = path.join(__dirname, '../templates')

app.use(express.json())
app.set('view engine', 'hbs')
app.set('views', templatePath)
app.use(express.urlencoded({extended:false}))


app.get("/", (req,res)=>{
    res.render("signup")
   
})

// app.get("/signup", (req,res)=>{
//     res.render("signup")
   
// })


app.post("/signup", async(req,res)=>{
    
    
    const data = {
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
    confirmPassword:req.body.confirmPassword,
    }

    await collection.create(data)

    res.render('home')
    
})

app.listen(3000, ()=>{

    console.log("port connected.")
})
