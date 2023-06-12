import express from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config/serverConfig';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send("Hello from the server");
})

app.listen(PORT, () => {
    console.log('Server running on PORT :', PORT);
})