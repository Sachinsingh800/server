const express=require("express")
const mongoose=require('mongoose')

const app=express()
app.use(express.json())

mongoose.connect("mongodb+srv://sachinsinghgnc:VPHB1JEwU3U0gMkD@computer-site.vpqxzwp.mongodb.net/computer-site")

const userRoute=require("./routes/userRoute")
app.use('/api',userRoute)
app.listen(8000,()=>{
    console.log("server is runing... on port 8000")
})






