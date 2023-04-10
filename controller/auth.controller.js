class authController {
    async registration(req, res) {
        const {loginUser, passwordUser} = req.body;
        const newUser = await db.query("INSERT INTO users (loginUser, passwordUser) VALUES ($1, $2) RETURNING id", [loginUser, passwordUser]);
        let user = new User(newUser.rows[0].id, loginUser, passwordUser);
        res.json(user);
    }


    /*
    async login(req, res) {
        passport.authenticate(
            'login',
            async (err, user, info) => {
                try {
                    if (err || !user) {
                        const error = new Error('An error occurred.');
                        return next(error);
                    }
                    req.login(
                        user,
                        { session: false },
                        async (error) => {
                            if (error) return next(error);
                            const body = { _id: user._id, loginUser: user.loginUser };
                            const token = jwt.sign({ user: body }, 'TOP_SECRET');
                            return res.json({ token });
                        }
                    );
                } catch (error) {
                    return next(error);
                }
            }
        );
    }

    async getUser(req, res) {
        res.json({
            message: 'You made it to the secure route',
            user: req.user,
            token: req.query.secret_token
        });
    }
    */
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