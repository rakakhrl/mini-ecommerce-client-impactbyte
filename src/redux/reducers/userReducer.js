import { CHANGE_LOGIN_STATUS, UPDATE_USER_DATA } from "../actions/actionType";

const initialState = {
  isLogin: false,
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN_STATUS:
      return {
        ...state,
        isLogin: action.payload,
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
