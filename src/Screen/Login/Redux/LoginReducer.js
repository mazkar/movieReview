const initialState = {
  email: '',
  password: '',
  access_token: '',
  isError: false,
  isLoading: false,
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL_TO_LOGIN_REDUCER':
      return {
        ...state,
        email: action.payload,
      };
    case 'SET_PASSWORD_TO_LOGIN_REDUCER':
      return {
        ...state,
        password: action.payload,
      };
    case 'SET_TOKEN_TO_LOGIN_REDUCER':
      return {
        ...state,
        access_token: action.payload,
        isError: false,
      };
    case 'POST_LOGIN':
      return {
        ...state,
        isError: false,
        access_token: action.payload,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
