const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('../keys');
const db = require('../db.js');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
};

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const user = await db.query('SELECT id FROM users WHERE id = $1', [payload.id]);
                if (user) {
                    done(null, user.rows[0]);
                } else {
                    done(null, false);
                }
            } catch (error) {
                console.log(error);
            }
        })
    );
}