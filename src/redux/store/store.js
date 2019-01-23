import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/index';
import thunk from 'redux-thunk';

export default compose(applyMiddleware(thunk))(createStore)(rootReducer);