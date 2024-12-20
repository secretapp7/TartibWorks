const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let notes = [];

app.post('/api/save', (req, res) => {
    const { content } = req.body;
    notes.push({ id: Date.now(), content });
    res.status(201).send({ message: 'Note saved to TartibWorks!', note: { content } });
});

app.get('/api/notes', (req, res) => {
    res.send(notes);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`TartibWorks backend running on port ${PORT}`));
