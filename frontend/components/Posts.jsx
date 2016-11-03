import React from 'react';
import $ from 'jquery';

const Posts = React.createClass({
  getInitialState(){
    return {data: null}
  },
  componentWillMount(){
    $.ajax({
      url: '/api/posts',
      success: function(data) {
        console.log(data)
        this.setState({data: data})
      }.bind(this)
    })
  },
  render(){
    return (
      <div>
        POSTS!!!
      </div>
    )
  }
})

export default Posts;
