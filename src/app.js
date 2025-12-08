import express from 'express'
import UserController from './app/controller/UserController.js'

import client from 'prom-client';

client.collectDefaultMetrics();




const app = express()


app.get('/metrics', async (req, res) => {
    try {
      res.set('Content-Type', client.register.contentType);
      res.end(await client.register.metrics());
    } catch (err) {
      res.status(500).end(err);
    }
  });

app.use(express.json())
app.get("/user", UserController.getAllUserController)
app.get("/user/:id", UserController.getUserByIdController)
app.put("/user/update", UserController.updateUserByIdFromBodyController)
app.post("/user/add", UserController.saveUserController)
app.put("/user/update/add/:id", UserController.updateUserController)
app.delete("/user/remove/:id", UserController.deleteUserByidControler)


export default app