import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  user: userReducer,
  category: categoriesReducer,
  product: productReducer,
});

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
