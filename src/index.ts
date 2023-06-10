import express from 'express';
import { PORT } from './config/serverConfig';

const app = express();

app.get('/hello', (req, res) => {
    res.send("Hello from the server");
})

app.listen(PORT, () => {
    console.log('Server running on PORT :', PORT);
})