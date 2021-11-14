const initialState = {
  loading: false,
  isSuccess: false,
  language: 'en',
  theme: 'dark',
  allData: [],
  isLogged: false,
  googleLogged: false,
};

export function GlobalReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'GET_ALL_DATA':
      return {
        ...state,
        allData: action.payload,
      };
    case 'SET_IS_LOGGED':
      return {
        ...state,
        isLogged: action.payload,
      };

    default:
      return state;
  }
}
