import { createStore } from 'redux';
import throttle from 'lodash.throttle';
import { composeWithDevTools } from 'redux-devtools-extension';

import articles from './reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(articles, persistedState, composeWithDevTools());

  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000),
  );

  return store;
};

export default configureStore;
