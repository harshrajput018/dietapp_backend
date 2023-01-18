const express=require('express')
var cors = require('cors')
const admin = require('./routes/admin')
const signup = require('./routes/signup')
const login = require('./routes/login')
const adminsignup = require('./routes/adminsignup')
const adminlogin = require('./routes/adminlogin')
const addmeals = require('./routes/addmeals')
const getmeals = require('./routes/getmeals')
const getex = require('./routes/getex')
const deletemeal = require('./routes/deletemeal')
const addexercise = require('./routes/addexercise')

const mongoose=require('mongoose');
var app = express()
 
mongoose.connect('mongodb+srv://Harsh1827:Harsh18@cluster0.j4oejhd.mongodb.net/?retryWrites=true&w=majority').then(()=>{console.log('db has been connected')});

app.use(cors())
app.use('/admin', admin)
app.use('/adminlogin', adminlogin)
app.use('/adminsignup', adminsignup)
app.use('/signup', signup)
app.use('/login', login)
app.use('/addmeals', addmeals)
app.use('/getex',getex)
app.use('/addexercise', addexercise)
app.use('/getmeals', getmeals)
app.use('/deletemeal', deletemeal)
app.use(express.json())



app.get('/',(req,res)=>{
    res.send({name:'harsh'});
})

app.listen('8000',()=>{
    console.log('server is listening at port 8000');
})