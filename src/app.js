import express from 'express'

const app=express()

app.get("/hello", (req,res)=>{
     res.send("here we go again rs")
})


export default app