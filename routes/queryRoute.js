const express=require("express")
const cors=require('cors')
const query_route=express()


query_route.use(express.json())
query_route.use(cors())
query_route.use(express.urlencoded({extended:true}))
const queryContoller=require("../userController/queryController")

query_route.post("/query",queryContoller.usersQuery)
query_route.get("/querydata",queryContoller.getQueryData)

module.exports=query_route