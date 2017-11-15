import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from 'store/configureStore';
import App from './App';
import initialData from './initialData';

export const store = configureStore({
  weeks: initialData
});
const rootElement = document.getElementById('root');
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    rootElement
  );
};

if (module.hot) {
  module.hot.accept('./App', () => setTimeout(render(App)));
}

render(App);
