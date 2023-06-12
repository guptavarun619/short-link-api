import express from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config/serverConfig';
import { registerUser } from './controllers/user';
import api from './api'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send("Hello from the server");
})

app.use('/api', api);

app.listen(PORT, () => {
    console.log('Server running on PORT :', PORT);
})