const Query=require("../Modals/queryModal")

const usersQuery = async(req,res)=>{
  try{
    const name=req.body.name
    const email = req.body.email
    const query=req.body.query
  const  querys=new Query({
    name,
    email,
    query
  })
   const results= await querys.save()
   if(results){
    res.status(200).send({success:true,message:"Your query has been submited successfully"})
   }else{
    res.status(201).send({success:false,message:"Something went wrong"})
   }
   }catch(error){
    res.status(400).send({success:false,message:error.message})
   }
}



const getQueryData=async(req,res)=>{
  try{
   const userinfo= await Query.find({})

   if(userinfo){
     res.status(200).send({message:"your user detail fetch successfuly",userinfo})
   }else{
     res.status(201).send({message:"user information not found"})
   }
  }catch(error){
     res.status(400).send({message:"Something wrong please check your internet"})
  }
}

module.exports={
  usersQuery,
  getQueryData
}