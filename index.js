const express = require('express');
const format = require('date-format');
const { application } = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.status(200).send(`<h1> Hello World!!. /<h1>`);
});

app.get('/api/v1/facebook', (req, res) => {
    const objData = {
        username: "juanda antonius pakpahan",
        followers: 200,
        follows: 180,
        date: format("dd/MM - hh:mm:ss",new Date())
    }

    res.status(200).json(objData);
});

app.get('/api/v1/instagram', (req, res) => {
    const objData = {
        username: "juanda antonius pakpahan",
        followers: 150,
        follows: 120,
        date: format("dd/MM - hh:mm:ss", new Date())
    };

    res.status(200).json(objData);
});

app.get('/api/v1/linkedin', (req, res) => {
    const objData = {
        username: "juanda antonius pakpahan",
        followers: 120,
        follows: 100,
        date: format("dd/MM - hh:mm:ss", new Date())
    }

    res.status(200).json(objData);
});

app.get('/api/v1/:id', (req, res) => {
    res.status(200).json({data: { id: req.params.id}});
});

app.get('/api/v1/')

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});