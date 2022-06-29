import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.use(cors())
app.get(/\/(.*)/, async (req, res) => {
    const targetUrl = req.url.substr(1);
    console.log('Will request:', targetUrl);
    const result = await fetch(targetUrl);
    console.log('Result:',result.status);
    res.send(result.text());
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});