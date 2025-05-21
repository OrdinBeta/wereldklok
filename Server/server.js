import express from 'express';
import { Clock } from './clock.js';

const app = express();
const port = 3000;



app.use(express.static('../Client/src'));
app.use(express.json());

const clocks = [
    new Clock('Home', 'Europe/Brussels', 'nl-BE'),
];

app.get('/my-clocks', (req, res) => {
    res.json(clocks);
});

app.listen(port, () => {
    console.log("http://localhost:" + port);
});

