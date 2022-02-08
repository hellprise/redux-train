import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { commentDelete, commentUpdate } from '../../redux/actions';

const SingleComment = ({ data }) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState('');
  const { text, id } = data;

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleUpdateComment = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };

  const handleComment = (e) => {
    setCommentText(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  return (
    <form onSubmit={handleUpdateComment} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleComment} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
