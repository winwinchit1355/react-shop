import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { loadingReducer } from "./loadingReducer";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";
import { orderReducer } from "./orderReducer";

export const reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  featureProducts: productReducer,
  shopProducts: productReducer,
  productDetail: productReducer,
  loading: loadingReducer,
  isLoggedIn: authReducer,
  register: authReducer,
  cartitems: cartReducer,
  count: cartReducer,
  orders: orderReducer,
});
