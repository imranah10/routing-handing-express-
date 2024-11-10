// core module 
const path=require('path')
// external module 
const express=require('express')
const hostRouter=express.Router()

hostRouter.get('/host/add-home',(req,res,next)=>{
    // console.log(req.url,req.method,"second middleware")
    res.sendFile(path.join(__dirname,'../','views','AddHome.html'))
})
hostRouter.post('/host/add-home',(req,res,next)=>{
    // console.log(req.url,req.method,"second middleware")
    console.log(req.body)
    res.sendFile(path.join(__dirname,'../','views','RegSuccess.html'))
})
module.exports=hostRouter;