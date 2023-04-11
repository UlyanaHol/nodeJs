const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db.js');
const keys = require("../keys");

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, keys.jwt, { expiresIn: "24h" })
}

class authController {
    async registration(req, res) {
        const { loginUser, passwordUser } = req.body;
        const hashPassword = bcrypt.hashSync(passwordUser, 7);
        const newUser = await db.query("INSERT INTO users (loginUser, passwordUser) VALUES ($1, $2) RETURNING id", [loginUser, hashPassword]);
        res.json('Complete');
    }


    async login(req, res) {
        const { loginUser, passwordUser } = req.body;
        const user = await db.query('SELECT * FROM users WHERE loginUser = $1', [loginUser]);
        if (!user) {
            return res.status(400).json({ message: `Пользователь ${loginUser} не найден` });
        }
        const validPassword = bcrypt.compareSync(passwordUser, user.rows[0].passworduser);
        if (!validPassword) {
            return res.status(400).json({ message: `Введен неверный пароль` })
        }
        let token = generateAccessToken(user.rows[0].id);
        return res.json({token});
    }
}

class User {
    //конструктор
    constructor(id, loginUser, passwordUser) {
        this.id = id;
        this.loginUser = loginUser;
        this.passwordUser = passwordUser;
    }
}

module.exports = new authController();