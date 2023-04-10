const { secret } = require("../config");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db.js');

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, { expiresIn: "24h" })
}

class authController {
    async registration(req, res) {
        const { loginUser, passwordUser } = req.body;
        const candidate = await db.query('SELECT * FROM users WHERE loginUser = $1', [loginUser]);
        const hashPassword = bcrypt.hashSync(passwordUser, 7);
        const newUser = await db.query("INSERT INTO users (loginUser, passwordUser) VALUES ($1, $2) RETURNING id", [loginUser, hashPassword]);
        let user = new User(newUser.rows[0].id, loginUser, hashPassword);
        res.json(user);
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
        const token = generateAccessToken(user._id);
        return res.json({ token });
    }

    async getUsers(req, res) {
        try {
            const users = await db.query('SELECT * FROM users');
            res.json(users.rows)
        } catch (e) {
            console.log(e)
        }
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