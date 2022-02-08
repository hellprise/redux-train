import { createStore } from 'redux';

const initialState = {
  // начальное состояние, которое будет находиться в сторе, а также использоваться в UI
  likes: 0,
};

const reducer = (state = initialState, action) => {
  console.log('reducer: ', action);

  return state;
};

const store = createStore(reducer); // принимает на вход reducer, который создан выше;

export default store;
