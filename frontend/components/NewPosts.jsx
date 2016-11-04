import React from 'react';
import $ from 'jquery';

const NewPost = React.createClass({
  getInitialState(){
    return {title: '', content: ''}
  },
  handleTitleChange(e){
    this.setState({title: e.target.value})
  },
  handleContentChange(e){
    console.log(e.target.value)
    this.setState({content: e.target.value})
  },
  handleSubmit(e){
    e.preventDefault();

    let inputTitle = this.state.title;
    let inputContent = this.state.content;

    $.ajax({
      url: '/api/posts',
      type: 'POST',
      data: {title: inputTitle, content: inputContent}
    })
  },
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleTitleChange} placeholder="Title"/>
        <input type="text" onChange={this.handleContentChange} placeholder="Body"/>
        <input type="submit" value='Submit' />
      </form>
    )
  }
})

export default NewPost;
