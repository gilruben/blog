import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import NewPosts from './components/NewPosts';
import PostsPage from './components/PostsPage';
import Posts from './components/Posts';
import TargetPost from './components/TargetPost';

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
        <Route path=":id" component={TargetPost} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
