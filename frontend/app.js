import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import $ from 'jquery';
import NewPosts from './components/NewPosts';
import Posts from './components/Posts';

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
      <Route path="posts" component={Posts} />
    </Route>
  </Router>,
  document.getElementById('root')
);
