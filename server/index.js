const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const PORT = 3001;
app.get('/sasso', (req, res) => {
  const name = req.query.name || 'Wold';
  // res.send(`<h1>API Running on the port ${PORT}</h1>`);
  /* res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` })); */
  console.log("Gesù NON mi vuole bene");
});

app.listen(PORT, () =>
  console.log(`ProjectFrittini_Dashboard | Server started on port ${PORT} - use 'localhost:${PORT}`)
  // https://stackoverflow.com/questions/45367298/could-not-proxy-request-pusher-auth-from-localhost3000-to-http-localhost500
);
