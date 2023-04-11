const express = require('express');
const app = express();
const meetupRouter = require('./routes/meetUp.routes');
const authRouter = require('./routes/auth.routes');
const passport = require('passport');

app.use(express.json());

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use('/api', meetupRouter);
app.use('/auth', authRouter);


app.listen(3000, () => {
    console.log('Server has started on port 3000...');
});