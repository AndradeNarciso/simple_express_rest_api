const express= require ('express')
const app=express()
const port =3000

app.get("/hello", (req,res)=>{
     res.send("here we go again ")
})

app.listen(port,()=>{
    console.log(`Server is up at ${port}`)
})