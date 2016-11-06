import React from 'react';

const TargetPost = React.createClass({
  componentWillMount(){
    // const id = this.props.params.id
    // $.ajax({
    //   url: `api/posts/${id}`,
    //   success(data){
    //     console.log(data)
    //   }
    // })
  },
  render(){
    return <div>{this.props.params.id}</div>
  }
})

export default TargetPost;
