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
        this.setState({data: data[0]})
      }.bind(this)
    })
  },
  render(){
    return (
      <div>
        {this.state.data ? this.state.data.title : null}
  
      </div>
    )
  }
})

export default Posts;
