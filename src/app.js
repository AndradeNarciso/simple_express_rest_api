import express from 'express'
import UserController from './app/controller/UserController.js'

const app = express()

app.use(express.json())
app.get("/user", UserController.getAllUserController)
app.get("/user/:id", UserController.getUserByIdController)
app.put("/user/update", UserController.updateUserController)
app.post("/user/add", UserController.updateUserByidFromBodyController)
app.put("/user/update/add/:id", UserController.saveUserController)
app.delete("/user/remove/:id", UserController.deleteUserByidControler)


export default app