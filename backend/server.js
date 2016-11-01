const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postModel = require('./posts/post-model');
const Post = mongoose.model('Post');

mongoose.connect('mongodb://localhost/blog-app')

const db = mongoose.connection;

//allows POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
  res.end()
})

app.get('/posts', (req, res) => {
  //res.send('Hey from the post page');
  Post.find({}, (err, data) => {
    res.send(data)
  })
})

db.on('open', () => {
  console.log('db connection opened');

  app.listen(5555, () => {
    console.log('Listening on port 5555');
    Post.create({title: 'test post 1', author: 'nebur', date: 'Nov 1, 2016'}, (err, data) => {
      if(err) console.log('Error with database');
      else console.log('Post created');
    })

    Post.find({}, (err, data) => {
      console.log("Data: ", data)
    })
  });

})
