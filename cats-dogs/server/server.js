const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const port = 3009;
const app = express();

app.use(bodyParser.json());
app.use(express.static(_dirname = "/../build"));

app.get('/api/getdog', controller.getdog);
app.get('/api/getname', controller.getname);
app.get('/api/dogs', controller.getdogs);
//app.get('/api/seeNames', controller.listnames);
app.post('/api/dogs', controller.createdog);
app.delete('/api/dogs/:id', controller.delete )
app.put('/api/dogs/:id', controller.update )


app.listen(port, () =>
{
    console.log(`Server listening on port: ${port}`);
});