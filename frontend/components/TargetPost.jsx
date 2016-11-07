import React from 'react';
import $ from 'jquery';

const TargetPost = React.createClass({
  getInitialState(){
    return {title: null, content: null}
  },
  componentWillMount(){
    const id = this.props.params.id

    $.ajax({
      url: `/api/posts/${id}`,
      success: function(data){
        this.setState({title: data.title, content: data.content});
      }.bind(this)
    })
  },
  render(){
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.state.content}</p>
      </div>
    )
  }
})

export default TargetPost;
