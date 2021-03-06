const path = require('path');
const router = require('express').Router();
const rootPath = path.join(__dirname, '../../')
//Response for the home page
const home = (req, res) => {
  res.sendFile(rootPath + './frontend/index.html')
}

//Configure router for get and post calls
router.route('/*')
  .get(home)

// router.route('/posts')
//   .get(home)
//
// router.route('/posts/hello')
//   .get(home)

module.exports = router;
