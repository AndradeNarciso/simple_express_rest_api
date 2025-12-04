import express from 'express'

const app = express()
app.use(express.json())

app.get("/user", (req, res) => {

    
})

app.get("/user/:id", (req, res) => {
    
})

app.put("/user/update", (req, res) => {
   
})

app.post("/user/add", (req, res) => {
   
})


app.put("/user/update/:id", (req, res) => {
   
})

app.delete("/user/remove/:id", (req, res) => {
   
})


export default app