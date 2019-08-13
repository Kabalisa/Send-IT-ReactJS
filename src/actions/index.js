import http from '../helpers/httpServices';
import { LOGIN_USER, LOGIN_ERROR, LOGIN_SUCCESSFUL } from './types';

export const loginUser = ({ Email, Password }) => async dispatch => {
  dispatch({
    type: LOGIN_USER,
    payload: http
      .post('/auth/signin', {
        email: Email,
        password: Password
      })
      .then(result =>
        dispatch({
          type: LOGIN_SUCCESSFUL,
          payload: result.data
        })
      )
      .catch(error =>
        dispatch({
          type: LOGIN_ERROR,
          payload: error.response
        })
      )
  });
};
