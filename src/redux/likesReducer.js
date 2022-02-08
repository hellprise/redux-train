import { DECREMENT, INCREMENT } from './types';

const initialState = {
  // начальное состояние, которое будет находиться в сторе, а также использоваться в UI
  likes: 0,
};

export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, // создаём копию массива, ибо мутировать его ни в коем случае нельзя. и после копирования массива мы изменяем поле likes
        likes: state.likes + 1,
      };

    case DECREMENT:
      return {
        ...state,
        likes: state.likes - 1,
      };

    default:
      break;
  }

  return state;
};
