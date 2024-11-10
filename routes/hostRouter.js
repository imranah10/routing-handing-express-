// / external module 
const express=require('express')
const hostRouter=express.Router()

hostRouter.post('/host/add-home',(req,res,next)=>{
    // console.log(req.url,req.method,"second middleware")
    console.log(req.body)
    res.send(`<h1>your home register successfully</h1>
        <a href="/">go to home</a>
        
        `)
})
module.exports=hostRouter;