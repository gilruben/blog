import React from 'react';
import ReactDOM from 'react-dom';

const NewPost = React.createClass({
  render(){
      return (
        <div>
        <h1>New Post!!</h1>
        </div>
      )
  }
})

ReactDOM.render(
  <NewPost />,
  document.getElementById('root')
);
