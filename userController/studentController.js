const Student = require("../Modals/studentModal");
const form = async (req, res) => {

    try{
       const name=req.body.name
       const email=req.body.email
       const image= req.file.filename
       const mobile=req.body.mobile
       const gender=req.body.gender
       const dob=req.body.dob
       const fatherName=req.body.fatherName
       const motherName=req.body.motherName
       const parentContact=req.body.parentContact
       const address=req.body.address
       const adharNo=req.body.adharNo
       const course=req.body.course
       const studentDetail=await  Student.findOne({email})
       if(studentDetail){
          res.status(201).send({message:"abe kitni bar ek hi form ko submitg karega berojgar kahika"}) 
       }else{
        
           const student=new Student({
               name,
               email,
               mobile,
               image: req.file.filename,
               gender,
               dob,
               fatherName,
               motherName,
               parentContact,
               address,
               adharNo,
               course,
         
               
           })
           const studentDetails=await student.save()
           res.status(200).send({message:"bhai tumhara form submit ho gya hai ab thoda ruk",studentDetails})
       }
       
    }catch(error){
       console.log(error.message)
    }
 
}
const getFromData=async(req,res)=>{
         try{
          const userinfo= await Student.find({})
    
          if(userinfo){
            res.status(200).send({message:"your user detail fetch successfuly",userinfo})
          }else{
            res.status(201).send({message:"user information not found"})
          }
         }catch(error){
            res.status(400).send({message:"Something wrong please check your internet"})
         }
}


const studentVerification=async(req,res)=>{
   try{

      const email=req.body.email
       const dob=req.body.dob
       const studentData=await Student.findOne({email:email})
    
       if(studentData){
           
            if(dob==studentData.dob){
               res.status(200).send({message:"User verified  successfully",studentData})
            }else{
               res.status(201).send({message:"user not found"})
            }
       }else{
           res.status(202).send({message:"user not found"})
       }
   }catch(error){
    res.status(400).send(error.message)
   }
 
}


const deleteData=async(req,res)=>{
  try{
    const result=await Student.deleteOne({_id:req.params.id})
    if(result){
      res.status(200).send({success:true,message:"delete successfully"})
    }else{
      res.status(201).send({success:false,message:"something went wrong"})
    }
  }catch(error){
   console.log(error)
  }

}

const getuser=async(req,res)=>{
  try{
    const result=await Student.findOne({_id:req.params.id})
    if(result){
      res.status(200).send({success:true,message:"user found successfully",result})
    }else{
      res.status(201).send({success:false,message:"record not found"})
    }
  }catch(error){
   console.log(error)
  }

}

const updateData=async(req,res)=>{
  try{
    const result=await Student.updateOne({_id:req.params.id},{$set:req.body})

    if(result){
      res.status(200).send({success:true,message:"Data update successfully",result})
    }else{
      res.status(201).send({success:false,message:"record not found"})
    }
  }catch(error){
   console.log(error)
  }

}


module.exports = {
  form,
  getFromData,
  studentVerification,
  deleteData,
  getuser,
  updateData,

};
