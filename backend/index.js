//Models
const Posts = require('./posts/post-model');

//Routes
const home = require('./home/home-router');
const posts = require('./posts/post-router');

module.exports = {
  models: {
    Posts: Posts
  },
  routes: {
    posts: posts,
    home: home
  }
}
