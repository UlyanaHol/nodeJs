const express = require('express');
const app = express();
const meetupRouter = require('./routes/meetUp.routes');
const authRouter = require('./routes/auth.routes');

app.use(express.json());
app.use('/api', meetupRouter);
app.use('/auth', authRouter);


app.listen(3000, () => {
    console.log('Server has started on port 3000...');
});