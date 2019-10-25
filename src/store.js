import reducer from './modules/Auth/Login/reducer';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { authSaga } from './modules/Auth/watchers';

// const composeEnhancers =
//   process.env.NODE_ENV === 'development'
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(authSaga);

export default store;
