import express from 'express'
import userCollection from './db/colection.js'
import { nextId, getuserById, updateUser, deleteUser } from './util/userUtil.js'

const app = express()
app.use(express.json())

app.get("/user", (req, res) => {

    res.status(200).send(userCollection)
})

app.get("/user/:id", (req, res) => {
    res.json(getuserById(req.params.id))
})

app.put("/user/update", (req, res) => {
    const { id, Name, Age } = req.body

    if (Name === "" || Age === "" || id === "") {
        res.status(400).send("Params can not be blank")
        return
    }

    res.status(202).json(updateUser({ id, Name, Age }))
})

app.post("/user/add", (req, res) => {
    const { Name, Age } = req.body

    if (Name === "" || Age === "") {
        res.status(400).send("Params can not be blank")
        return
    }
    const user = {
        "id": nextId(),
        Name,
        Age
    }
    userCollection.push(user)
    res.status(201).send("New user added")

})


app.put("/user/update/:id", (req, res) => {
    const { Name, Age } = req.body
    const id = Number(req.params.id)

    if (Name === "" || Age === "") {
        res.status(400).send("Params can not be blank")
        return
    }

    res.status(202).json(updateUser({ id, Name, Age }))
})

app.delete("/user/remove/:id", (req, res) => {
    deleteUser(req.params.id);
    res.json({ message: `user with id ${req.params.id} removed` })

})


export default app