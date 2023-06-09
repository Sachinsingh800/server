const express=require("express")
const mongoose=require('mongoose')
const cloudinary=require("cloudinary")
const app=express()
app.use(express.json())


mongoose.connect("mongodb+srv://sachinsinghgnc:VPHB1JEwU3U0gMkD@computer-site.vpqxzwp.mongodb.net/computer-site")
const queryRoute=require("./routes/queryRoute")
const userRoute=require("./routes/userRoute")
const adminRoute=require("./routes/adminRoute")
app.use('/api',adminRoute)
const studentRoute=require("./routes/studentRoute")
app.use('/api',studentRoute)
app.use('/api',userRoute)
app.use("/api",queryRoute)
app.listen(8000,()=>{
    console.log("server is runing... on port 8000")
})






