// src/actions/authActions.js
import * as jwtDecode from 'jwt-decode';
const decode = jwtDecode.default || jwtDecode;

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (token) => {
  // Décodage du token pour extraire les infos utilisateur (si elles sont présentes)
  const user = decode(token);
  return {
    type: LOGIN_SUCCESS,
    payload: { token, user },
  };
};

export const logout = () => ({
  type: LOGOUT,
});
