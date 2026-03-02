import express from 'express';

const app = express();

const PORT = 3000;
const SERVER = "localhost";


app.get('/', (_req, res) => {
  res.send('Hello, world!');
}).get('/suny', (_req, res) => {
  res.send('Hello, SUNY!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://${SERVER}:${PORT}`);
});
