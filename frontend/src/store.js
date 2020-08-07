import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from './reducers/productReducer';

const initailState = {};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initailState, composeEnhancer(applyMiddleware(thunk)));

export default store;