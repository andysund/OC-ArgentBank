// src/reducers/authReducer.js
import { LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
