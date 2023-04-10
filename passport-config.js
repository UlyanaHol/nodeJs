module.exports = {
    jwtSecret: "s0m3$3Cret$h0lyC0d3&$",
    jwtSession: {
        session: false
    }
};


/*
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
passport.use(
    new JWTstrategy(
        {
            secretOrKey: 'TOP_SECRET',
            jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
);

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'loginUser',
            passwordField: 'passwordUser'
        },
        async (loginUser, passwordUser, done) => {
            try {
                const user = await db.query('SELECT * FROM users WHERE loginUser = $1 AND passwordUser = $2', [loginUser, passwordUser]);;
                if (!user) {
                    return done(null, false, { message: 'User not found' });
                }
                const validate = await user.isValidPassword(password);
                if (!validate) {
                    return done(null, false, { message: 'Wrong Password' });
                }
                return done(null, user, { message: 'Logged in Successfully' });
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.use(
    'registration',
    new localStrategy(
        {
            usernameField: 'loginUser',
            passwordField: 'passwordUser'
        },
        async (loginUser, passwordUser, done) => {
            try {
                const user = await db.query("INSERT INTO users (loginUser, passwordUser) VALUES ($1, $2) RETURNING id", [loginUser, passwordUser]);
                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);
*/