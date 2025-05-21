import express from 'express';
import { Clock } from './clock.js';
import cors from 'cors';

const app = express();
const port = 3010;


// TODO: CORRECT ROUTES
app.use(express.json());
app.use(express.static('../Client/dist/wereldklok/browser'));

const clocks = [
    new Clock('Home', 'Europe/Brussels', 'nl-BE'),
    new Clock('Sea', 'Pacific/Honolulu', 'nl-BE'),
];

app.get('/my-clocks', cors(), (req, res) => {
    res.json(clocks);
});

app.listen(port, () => {
    console.log("http://localhost:" + port);
});

