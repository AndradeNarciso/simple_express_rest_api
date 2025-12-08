import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();

const pgp = pgPromise();

const db = pgp({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

db.one('SELECT $1 AS value', 123)
    .then((data) => {
        console.log(`DB connection done`)

    })
    .catch((error) => {
        console.log('ERROR:', error)
    })

export default db;
