// core module 
const path=require('path')
//  external module 
const express=require('express')
const userRouter=express.Router()

userRouter.get('/',(req,res,next)=>{
    // console.log(req.url,req.method,"first middle ware")
    res.sendFile(path.join(__dirname,'../','views','Home.html'))
})

module.exports=userRouter;