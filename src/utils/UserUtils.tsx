import {configureStore} from '../redux/store/configureStore';

export function getUserInfo() {
  const state = configureStore.getState();
  return state.user;
}

export function getToken() {
  const user = getUserInfo();
  return user.token;
}

export function getUrl() {
  const state = configureStore.getState();
  return state.user.url;
}

export function getUserId() {
  const user = getUserInfo();
  return user.dataUser.id;
}
