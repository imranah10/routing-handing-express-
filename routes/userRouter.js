// / external module 
const express=require('express')
const userRouter=express.Router()

userRouter.get('/',(req,res,next)=>{
    // console.log(req.url,req.method,"first middle ware")
    res.send(`<h1>welcome to home page</h1>
        <a href="/user/add-home">add-Home</a>
        `)
})
userRouter.get('/user/add-home',(req,res,next)=>{
    // console.log(req.url,req.method,"second middleware")
    res.send(`<h1>register page</h1>
        <form action="/host/add-home"method="POST">
            <input type="text"name="housename"placeholder="enter your house name"/>
        <input type="submit"/>
        </form>
        
        `)
})

module.exports=userRouter;