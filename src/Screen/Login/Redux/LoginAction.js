export const postLogin = payload => {
  return {
    type: 'POST_LOGIN',
    payload,
  };
};

export const setErrorLogin = payload => {
  return {
    type: 'LOGIN_ERROR',
    payload,
  };
};

export const setTokenToLoginReducer = payload => {
  return {
    type: 'SET_TOKEN_TO_LOGIN_REDUCER',
    payload,
  };
};
