import db from "../../db/db.js";

class UserController {
    async getAllUserController(req, res) {
        const sql = "SELECT * FROM users"

        try {
            const users = await db.any(sql);
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json({ error: 'server error' })
        }


    }
    async getUserByIdController(req, res) {
        const sql = "SELECT * FROM users where id=$1"

        try {
            const user = await db.any(sql, [req.params.id]);
            if (user.length===0)
                return res.status(404).json({ message: 'User Not found' })
            res.status(200).json(user)

        } catch (err) {
            res.status(500).json({ error: 'server error' })
        }

    }
    async saveUserController(req, res) {
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
    async updateUserController(req, res) {
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

    async updateUserByIdFromBodyController(req, res) {
        const sql = "UPDATE users SET name=$1, age=$2 WHERE id=$3"

        const { id, name, age } = req.body;
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
    async deleteUserByidControler(req, res) {
        const sql = "DELETE FROM users WHERE id=$1"
        const { id } = req.params;
        try {
            const result = await db.result(sql, [id]);
            if (result.rowCount === 0) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json({ message: "user removed" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "server erro" });
        }


    }
}
export default new UserController