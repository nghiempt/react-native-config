import {
  SAVE_LOGIN,
  SAVE_DATA_USER,
  SAVE_TOKEN,
  SAVE_URL,
  LOG_OUT,
} from './types';

export function saveLogin(checkLogin: any) {
  const payload = {checkLogin};
  return {
    type: SAVE_LOGIN,
    payload: payload,
  };
}

export function saveUserData(dataUser: string) {
  const data = JSON.parse(dataUser);
  const payload = {data};
  return {
    type: SAVE_DATA_USER,
    payload: payload,
  };
}

export function saveToken(token: any) {
  const payload = {token};
  return {
    type: SAVE_TOKEN,
    payload: payload,
  };
}

export function saveUrl(token: any) {
  const payload = {token};
  return {
    type: SAVE_URL,
    payload: payload,
  };
}

export function handleLogout() {
  return {
    type: LOG_OUT,
  };
}
