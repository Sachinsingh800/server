const express=require("express")
const Student=require("../Modals/studentModal")
const cors=require('cors')
const student_route=express()
const upload= require("../Utils/multer")

student_route.use(express.json())
student_route.use(cors())
student_route.use(express.urlencoded({extended:true}))

const studentController=require("../userController/studentController")
student_route.post('/adminsionform',upload.single("image"),studentController.form)
student_route.get('/getFrom',studentController.getFromData)
student_route.post('/verification',studentController.studentVerification)
student_route.delete('/delete/:id',studentController.deleteData)
student_route.get('/update/:id',studentController.getuser)
student_route.put('/updatedata/:id',studentController.updateData)

module.exports=student_route