import { ADD_ARTICLE } from './constants';

export const initialState = {
  articlesByHash: {},
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        articlesByHash: {
          ...state.articlesByHash,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default articles;
