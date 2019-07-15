import { createSelector } from 'reselect';

const articlesSelector = state => state.articlesByHash;
const articlesValuesSelector = state => Object.values(state.articlesByHash);
const idSelector = (state, id) => id;

const reduceToTitles = data =>
  data.reduce((acc, curr) => [...acc, { id: curr.id, title: curr.title }], []);

export const selectArticles = createSelector(
  articlesValuesSelector,
  data => reduceToTitles(data),
);

export const selectLastArticles = createSelector(
  articlesValuesSelector,
  data => {
    const reducedData = reduceToTitles(data);
    return data.length < 4
      ? reducedData
      : reducedData.slice(data.length - 4, data.length);
  },
);

export const selectArticle = () =>
  createSelector(
    [articlesSelector, idSelector],
    (data, id) => data[id],
  );
