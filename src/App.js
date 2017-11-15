import * as React from 'react';
import propTypes from 'prop-types';
import { Provider } from 'react-redux';
import DemoScene from 'scenes/DemoScene';

const App = ({ store }) => (
  <Provider store={store}>
    <DemoScene />
  </Provider>
);

App.propTypes = {
  store: propTypes.shape({
    weeks: propTypes.arrayOf(propTypes.object)
  }).isRequired
};

export default App;
