import express from 'express'
import userColection from './db/colection.js'
import { nextId } from './util/nextUser.js'

const app = express()
app.use(express.json())

app.get("/user", (req, res) => {

    res.status(200).send(userColection)
})

app.post("/user/add", (req, res) => {
    const { Name, Age} = req.body

    if(Name===null || Age===null){
        res.status(404).send("Params can not be null")
    }
    const user = {
        "id": nextId(),
        Name,
        Age
    }
    userColection.push(user)
    res.status(201).send("New user added")

   
})


export default app