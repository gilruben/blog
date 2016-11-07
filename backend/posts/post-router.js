const router = require('express').Router();
const Post = require('mongoose').model('Post');

//Get all posts from database
const getPost = (req, res) => {
  Post.find({}, (err, data) => {
    res.json(data);
  })
}

//Get post with a specific id
const getPostById = (req, res) => {
  Post.findById(req.params.id, (err, data) => {
    res.json(data);
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

router.route('/:id')
    .get(getPostById)


module.exports = router;
