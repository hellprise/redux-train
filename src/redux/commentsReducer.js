import { COMMENTS_LOAD, COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE } from './types';

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };

    case COMMENT_UPDATE:
      const { data } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex((comment) => comment.id === data.id);

      const nextComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];
      return {
        ...state,
        comments: nextComments,
      };

    case COMMENT_DELETE:
      return (() => {
        // возвращается в виде стрелочной ф-ции, чтобы создавать переменные изолированно по отношению к другим кейсам типов
        const { id } = action;
        const { comments } = state;
        const itemIndex = comments.findIndex((comment) => comment.id === id);

        const nextComments = [...comments.slice(0, itemIndex), ...comments.slice(itemIndex + 1)];
        return {
          ...state,
          comments: nextComments,
        };
      })();

    case COMMENTS_LOAD:
      const newComments = action.data.map((comment) => {
        return {
          text: comment.name,
          id: comment.id,
        };
      });

      return {
        ...state,
        comments: newComments,
      };

    default:
      return state;
  }
};
