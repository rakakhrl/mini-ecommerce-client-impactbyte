import { POPULATE_CATEGORIES } from "../actions/actionType";

const initialState = {
  categories: [],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
