const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const baseRouter = require('./baseRouter');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/auth', baseRouter);

function runServer(port=PORT) {
  const server = app
    .listen(port, () => {
      console.log(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Could not start server due to error: ', err);
    });
};

if (require.main === module) {
  runServer();
};

module.exports = app;
