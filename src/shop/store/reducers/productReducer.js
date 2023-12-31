import { productActionType } from "../../consts/index";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case productActionType.FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case productActionType.FETCH_FEATURE_PRODUCTS:
      return { ...state, featureProducts: action.payload };
    case productActionType.FETCH_SHOP_PRODUCTS:
      return { ...state, shopProducts: action.payload };
    case productActionType.FETCH_PRODUCT_DETAIL:
      return { ...state, productDetail: action.payload };
    default:
      return state;
  }
};
