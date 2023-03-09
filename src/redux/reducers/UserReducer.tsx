import {
  SAVE_LOGIN,
  SAVE_DATA_USER,
  SAVE_TOKEN,
  SAVE_URL,
  LOG_OUT,
} from '../actions/types';

const initialState = {
  checkLogin: false,
  dataUser: '',
  token: '',
  url: '',
};

export default function user(state = initialState, action: any) {
  switch (action.type) {
    case SAVE_LOGIN:
      return {
        ...state,
        checkLogin: action.payload.checkLogin,
      };

    case SAVE_DATA_USER:
      return {
        ...state,
        dataUser: action.payload.data,
      };

    case SAVE_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };

    case SAVE_URL:
      return {
        ...state,
        url: action.payload.token,
      };

    case LOG_OUT:
      return {
        ...state,
        checkLogin: false,
        dataUser: '',
        token: '',
      };
    default:
      return state;
  }
}
