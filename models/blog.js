const mongoose = require('mongoose');
const config = require('../utils/config');
const logger = require('../utils/logger');

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

const mongoUrl = config.MONGODB_URI;
mongoose
  .connect(mongoUrl)
  .then((result) => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB:', error.message);
  });

module.exports = mongoose.model('Blog', blogSchema);
