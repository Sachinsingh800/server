const mongoose=require("mongoose")


const userScheam=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  query:{
    type:String,
    required:true
  },

})
const Query=new mongoose.model("Query",userScheam)
module.exports=Query
