const router = require('express').Router();
const Post = require('mongoose').model('Post');

//Get all posts from database
const getPost = (req, res) => {
  Post.find({}, (err, data) => {
    res.send(data);
  })
}

const postPosts = (req, res) => {
  Post.create(req.body, () => {
    console.log('Post successfully created');
  })
}

router.route('/')
  .get(getPost)
  .post(postPosts)

module.exports = router;
