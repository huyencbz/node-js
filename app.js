const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
    res.send('Hello world');
});

//url: http://localhost:3000/routeparams/huyen/18
app.get('/routeparams/:name/:age', (req, res) => {
    console.log(req.params);
    res.send(req.params.name + ': ' + req.params.age);
});

//url: http://localhost:3000/querystring?name=huyen&age=18
app.get('/querystring', (req, res) => {
    console.log(req.query);
    res.send(req.query.name + ': ' + req.query.age);
});

//Serving Static Files with Express
app.use('/public', express.static(path.join(__dirname, 'static')));
app.get('/staticfile', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

//Http Post Request with Express and Body Parser Module
// app.use(bodyParser.urlencoded({ extended: true }));
// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.send("post data successfully");
// });

//Working with JSON Data with Express and the Body Parser Module
app.use(bodyParser.json());
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({ success: true });
});


app.listen(3000);