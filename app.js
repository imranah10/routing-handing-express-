// external module 
const express=require('express')
// local module 
const userRouter=require('./routes/userRouter')
const hostRouter=require('./routes/hostRouter')
const app=express()
// body parser 
app.use(express.urlencoded())
app.use((req,res,next)=>{
    console.log(req.url,req.method)
    next()
})
// seperate routing using express router
app.use(userRouter)
app.use(hostRouter)
app.use((req,res,next)=>{
    res.status(404).send(`<h1>404 page not found</h1>
        <a href="/">go to home</a>
        `)

})

app.listen(3001,()=>{
    console.log('server is running on port 3001')
})