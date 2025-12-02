import express from 'express'
import userColection  from './db/colection.js'

const app=express()

app.get("/user", (req,res)=>{
     res.send(userColection)
})


export default app