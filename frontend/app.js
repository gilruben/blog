import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import $ from 'jquery';
import NewPosts from './components/NewPosts';
import PostsPage from './components/PostsPage';
import Posts from './components/Posts';
import Post from './components/Post';

const App = React.createClass({
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={NewPosts} />
      <Route path="posts" component={PostsPage} >
        <IndexRoute component={Posts} />
        <Route path=":id" component={Post} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
