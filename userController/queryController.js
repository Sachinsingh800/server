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

module.exports={
  usersQuery
}