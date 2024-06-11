const express=require("express")
const mongoose= require("mongoose");
var bodyParser=require("body-parser")

const PORT = 3000;
const app=express();

// app.use(express.json());

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect("mongodb://localhost:27017/Rigestration_Form")
var db= mongoose.connection
db.on("error",()=>console.log("error in connecting to database"))
db.once("open",()=>console.log("successflly connected database"))

app.get("/",(req,res) => {
    res.set({
        "Allow-acces-Allow-Origin":'*'
    })
    return res.redirect('index.html')
})

app.post("/sign_up",(req,res) => {
    var name= req.body.name
    var age=req.body.age
    var email=req.body.email
    var mobile=req.body.mobile
    var gender=req.body.gender
    var password=req.body.password

    var data={
        "name":name,
        "age":age,
        "email":email,
        "mobile":mobile,
        "gender":gender,
        "password":password
    }
    db.collection('users').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Succesfully")
    })
    return res.redirect('signup_successfull.html')
})



app.listen(PORT, ()=>console.log(`Server is running at port no : ${PORT}`));
