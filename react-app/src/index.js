import React from 'react';
import ReactDOM from 'react-dom/client';
import 'typeface-quicksand';
import App from './App';
import './index.css'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './Redux/Reducer';
import saga from './Redux/Sagas';

/**
 * Setup Redux.
 */

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(saga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider
      store={store}
    >
      <App />
    </Provider>
  </React.StrictMode>
);
