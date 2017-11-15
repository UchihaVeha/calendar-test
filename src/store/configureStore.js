import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from 'reducers/rootReducer';

export default initialState => {
  const middlewares = [createLogger({ duration: true })];
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  if (module.hot) {
    module.hot.accept('reducers/rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }
  return store;
};
