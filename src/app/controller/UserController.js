//const UserRepository=require('')
class UserController {
    async getAllUserController(req, res) {
        
        res.json({message: "Ola mundo"})

    }
    async getUserByIdController(req, res) {
       
    }
    async saveUserController(req, res) {
        
    }
    async updateUserController(req, res) {

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