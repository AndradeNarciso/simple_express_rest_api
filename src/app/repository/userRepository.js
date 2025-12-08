import db from "../../db/db.js";

class UserRepository {

    async getAllUserByIDRepository(id) {
        const sql = "SELECT * FROM users where id=$1"

        try {
            const user = await db.any(sql, [id]);
            if (user.length === 0)
                return 'users no found '
            return user 

        } catch (err) {
            return 'Error server'
        }

    }

    async getAllUserRepository() {
        const sql = "SELECT * FROM users"

        try {
            const users = await db.any(sql);
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json({ error: 'server error' })
        }
    }

    async saveUserRepository(name , age ){
        const sql = "INSERT INTO users(name, age) VALUES($1, $2) RETURNING *"
        const { name, age } = req.body;
        try {
            const newUser = await db.one(sql,
                [name, age]
            );
            res.status(201).json(newUser);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "server erro" });
        }

    }

    async updateUserRepository(){
        const sql = "UPDATE users SET name=$1, age=$2 WHERE id=$3"
        const { id } = req.params;
        const { name, age } = req.body;
        try {
            const result = await db.result(sql, [name, age, id]);
            if (result.rowCount === 0) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json({ message: "update done" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "server error" });
        }
    }

}

export default new UserRepository