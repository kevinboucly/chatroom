import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducer';
import auth from 'src/middleware/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(
    auth,
  ),
));

export default store;
