import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Store from './store';
import rootSaga from './sagas';
import App from './components/App/App';

import './styles/index.scss';

const store = Store.configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
