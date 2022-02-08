import { errorOn } from './actions';
import { COMMENT_CREATE } from './types';

const badWords = ['какие-то', 'плохие', 'слова'];

export function spamFilter({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE) {
        const hasBadWords = badWords.some((word) => action.data.text.includes(word));
        if (hasBadWords) {
          return dispatch(errorOn('нужно уважать людей в интернетике'));
        }
      }
      return next(action);
    };
  };
}
