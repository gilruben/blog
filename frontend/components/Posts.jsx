import React from 'react';
import $ from 'jquery';
import Post from './Post';

const Posts = React.createClass({
  getInitialState(){
    return {data: null}
  },
  componentWillMount(){
    $.ajax({
      url: '/api/posts',
      success: function(data) {
        this.setState({data: data})
      }.bind(this)
    })
  },
  render(){
    return (
      <div>
        <h1>Posts</h1>
        {this.state.data ? this.state.data.map((val, indx) =>(
          <Post key={indx} title={val.title} content={val.content} dbId={val._id} />
        )) : null}
      </div>
    )
  }
})

export default Posts;
