const error = require('debug')('api:error');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morganDebug = require('morgan-debug');

// create an express app
const app = express();

// Enable cors on all routes
app.use(cors());

// Attach Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log all requests
app.use(morganDebug('api:request', 'dev'));

// get all route files dynamically
const routes = require('./routes');
// attach all routes
routes.forEach((route) => {
  app.use(`/${route.name}`, require(route.path));
});

// four params are required to mark this as a error handling middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  error('ERROR FOUND:', err);
  res.sendStatus(500);
});

// export the express app
module.exports = app;
