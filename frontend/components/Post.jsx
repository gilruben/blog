import React from 'react';
import {Link} from 'react-router';

const Post = (props) => {
    return (
      <div>
          <Link to={`/posts/${props.dbId}`}><h2>{props.title}</h2></Link>
          <p>
            {props.content}
          </p>
      </div>
    )
}

export default Post;
