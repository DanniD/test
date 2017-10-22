import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reduxSaga from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import saga from './saga/';
import reducer from './reducers/';

const sagaMiddleware = reduxSaga();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => {};
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
