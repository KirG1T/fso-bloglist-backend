const express = require('express');
const cors = require('cors');
const logger = require('./utils/logger');
const blogsRouter = require('./controllers/blogs');
const middleware = require('./utils/middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger.morganTinyLogger);
app.use(logger.morganCustomLogger);

app.use('/api/blogs', blogsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
