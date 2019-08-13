import { LOGIN_ERROR, LOGIN_SUCCESSFUL } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: { email: '', username: '' },
  message: '',
  token: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        isAuthenticated: true,
        user: {
          email: action.payload.user,
          username: action.payload.name
        },
        message: '',
        token: action.payload.token
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: {
          email: '',
          username: ''
        },
        message: action.payload.data.message,
        token: ''
      };
    default:
      return state;
  }
};

export default reducer;
