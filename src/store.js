import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware, { END } from 'redux-saga';
import logger from 'redux-logger';

export class Store {
  static configureStore () {
    const initialState = {};
    let store;

    const sagaMiddleware = createSagaMiddleware();

    if (process.env.NODE_ENV === 'development') {
      store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware, logger));
    }

    store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
  }
}

export default Store;
