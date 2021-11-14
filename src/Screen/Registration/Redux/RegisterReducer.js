const initialState = {
  email: '',
  password: '',
  fullName: '',
  isError: false,
};

export const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isError: false,
      };

    default:
      return state;
  }
};
