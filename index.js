const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const meetupRouter = require('./routes/meetUp.routes');

let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.json());
app.use('/api', meetupRouter);


app.listen(3000, () => {
    console.log('Server has started on port 3000...');
});