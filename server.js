import app from './src/app.js'
import dotenv from 'dotenv'
import db from './src/db/db.js'

dotenv.config()
const port = process.env.PORT

db.one('SELECT $1 AS value', 123)
    .then((data) => {
        console.log(`DB connection done`)
        app.listen(port, () => {
            console.log(`server running at ${port}`)
        })
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })



