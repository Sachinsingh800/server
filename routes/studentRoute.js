const express=require("express")
const Student=require("../Modals/studentModal")
const cors=require('cors')
const student_route=express()
const upload= require("../Utils/multer")

student_route.use(express.json())
student_route.use(cors())
student_route.use(express.urlencoded({extended:true}))

// const multer=require("multer")
// const path= require("path");

// student_route.use(express.static("public"))
// const storage= multer.diskStorage({
//     destination:function(req,file,cb){
//      cb(null,path.join(__dirname,"../public/userImages"),function(error,success){
//         if(error){
//             console.log(error)
//         }
//      })
//     },
//     filename:function(req,file,cb){
//      const name = Date.now()+'-'+file.originalname
//      cb(null,name,function(error,success){
//         if(error){
//             console.log(error)
//         }
//      })
//     }
// })
// const upload=multer({storage:storage})
const studentController=require("../userController/studentController")
student_route.post('/adminsionform',upload.single("image"),studentController.form)
student_route.get('/getFrom',studentController.getFromData)
student_route.post('/verification',studentController.studentVerification)
student_route.delete('/delete/:id',studentController.deleteData)
student_route.get('/update/:id',studentController.getuser)
student_route.put('/updatedata/:id',studentController.updateData)

module.exports=student_route