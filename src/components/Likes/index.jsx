import React from 'react';
import { connect } from 'react-redux';
import { decrementLikes, incrementLikes } from '../../redux/actions';

const Likes = (store) => {
  console.log(store);
  return (
    <div className="button-controls">
      <button onClick={store.onIncrementLikes}>❤ {store.likes}</button>
      <button onClick={store.onDecrementLikes}>dislike</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { likesReducer } = state;

  return {
    likes: likesReducer.likes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementLikes: () => dispatch(incrementLikes()),
    onDecrementLikes: () => dispatch(decrementLikes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
