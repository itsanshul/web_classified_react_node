import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './reducers';

const initialState = {};

//We can also use thunk as applymiddleware(thunk)
const middleware = [thunk];

const store = createStore(
  rootreducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
