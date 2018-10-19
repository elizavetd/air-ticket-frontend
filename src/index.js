import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Store from './store';
import rootSaga from './sagas';
import { initialization } from './actions/app';

import './styles/my-bulma.scss';
import './styles/index.scss';

import App from './components/App/App';

const store = Store.configureStore();
store.runSaga(rootSaga);
store.dispatch(initialization());

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
