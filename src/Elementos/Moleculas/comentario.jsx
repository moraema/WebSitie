// Comment.js
import React from 'react';
import Texto from '../Atomos/texto';

function Comment({ comment }) {
  return (
    <div className="comment">
      <Texto text={comment} />
    </div>
  );
}

export default Comment;
