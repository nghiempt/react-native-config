import {createAction, handleActions} from 'redux-actions';

export const LoginActions: any = {};
export const LoginState = {};

const initState = {};

const RESET_LOGIN = 'RESET_LOGIN';
LoginActions.reset = createAction(RESET_LOGIN);

const LoginReducer = handleActions(
  {
    /* -------------------------- reset ------------------------- */
    [RESET_LOGIN]: () => {
      return initState;
    },
  },
  initState,
);

export default LoginReducer;
