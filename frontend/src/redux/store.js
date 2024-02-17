import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer, appReducer, categoriesReducer, productsReducer } from './reducers';

const reducer = combineReducers({
	app: appReducer,
	user: userReducer,
	categories: categoriesReducer,
	products: productsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
