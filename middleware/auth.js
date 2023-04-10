var passport = require("passport");
var passportJWT = require("passport-jwt");
var cfg = require("../passport-config");
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("jwt")
};

module.exports = function() {
  var strategy = new Strategy(params, async function(payload, done) {
    const user = await db.query('SELECT * FROM users WHERE id = $1', [payload.id]);
    return done(null, user);
  });
  passport.use(strategy);
  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  };
};