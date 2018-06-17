const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const port = 3005;
const app = express();

app.use(bodyParser.json());
app.use(express.static(_dirname = "/../build"));

app.post('/api/')

app.listen(port, () =>
{
    console.log(`Server listening on port: ${port}`);
});