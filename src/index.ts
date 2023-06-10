import express from 'express';

const app = express();

const PORT = 3001;

app.get('/hello', (req, res) => {
    res.send("Hello from the server");
})

app.listen(PORT, () => {
    console.log('Server running on PORT :', PORT);
})