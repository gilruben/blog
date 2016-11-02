const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true}
});

const Post = mongoose.model('Post', blogSchema);
