const express = require('express');
const app = express();
const meetupRouter = require('./routes/meetUp.routes');
const authRouter = require('./routes/auth.routes');
const passport = require('passport');
const auth = require('./middleware/auth.js')();
const cfg = require('./passport-config');
const localStrategy = require("passport-local");

app.use(express.json());

app.use(auth.initialize());
// Passport Config
passport.use(new localStrategy(passport.authenticate()));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', meetupRouter);
app.use('/auth', passport.authenticate('jwt', { session: false }), authRouter);


app.listen(3000, () => {
    console.log('Server has started on port 3000...');
});