const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Require in models
const models = require('./index').models;
//Require in routes
const routes =require('./index').routes;

mongoose.connect('mongodb://localhost/blog-app')

const db = mongoose.connection;

// app.post('/posts', (req, res) => {
//   Post.create({title: 'test post 2', author: 'nebur', date: 'Nov 1, 2016'}, (err, data) => {
//     if(err) console.log('Error with database');
//     else console.log('Post created');
//   })
// })

db.on('open', () => {
  console.log('db connection opened');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static('bundle'));
  app.use('/posts', routes.posts);
  app.use('*', routes.home);

  app.listen(5555, () => {
    console.log('Listening on port 5555');
  });

})
