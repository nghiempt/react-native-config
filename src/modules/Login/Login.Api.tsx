import {ApiUrl} from '../../constant/apiUrl';
import {
  cacheUserAsync,
  clearUserAsync,
} from '../../utils/storage/UserStorageUtil';
import {
  actionLoadingStart,
  actionLoadingStop,
} from '../../components/Loading/Loading.State';
import {showToast} from '../../components/Toast/Toast.State';
import {
  saveLogin,
  saveUserData,
  saveToken,
  handleLogout,
} from '../../redux/actions/UserAction';
import {
  cacheTokenAsync,
  clearTokenAsync,
} from '../../utils/storage/TokenStorageUtil';
import axios from 'axios';
import axiosClient from '../../utils/ApiUtils';

/* --------------------------- Đăng nhập -------------------------- */
export function login(data: any) {
  return async (dispatch: any) => {
    try {
      await dispatch(actionLoadingStart());
      if (data.username === 'admin' && data.password === '123') {
        dispatch(saveLogin(true));
      } else {
        dispatch(showToast('Tài khoản không tồn tại', true));
      }
      const resp = await axios.post(ApiUrl.LOGIN, data);
      await dispatch(actionLoadingStop());
      if (resp.data.result) {
        await cacheTokenAsync(resp.data.data.access_token);
        await cacheUserAsync(JSON.stringify(resp.data.data.user));
        await dispatch(saveToken(resp.data.data.access_token));
        await dispatch(saveUserData(JSON.stringify(resp.data.data.user)));
        dispatch(saveLogin(true));
      } else {
        dispatch(showToast('Tài khoản không tồn tại', true));
      }
    } catch (error) {
      await dispatch(actionLoadingStop());
      // dispatch(showToast('Lỗi hệ thống !', true));
    }
  };
}

/* --------------------------- Đăng xuất -------------------------- */
export function logout() {
  return async (dispatch: any) => {
    try {
      await dispatch(actionLoadingStart());
      await clearTokenAsync();
      await clearUserAsync();
      dispatch(handleLogout());
      dispatch(showToast('Đăng xuất thành công', false));
      const resp = await axiosClient.post(ApiUrl.LOGOUT);
      await dispatch(actionLoadingStop());
      if (resp) {
        await clearTokenAsync();
        await clearUserAsync();
        dispatch(handleLogout());
        dispatch(showToast('Đăng xuất thành công', false));
      } else {
        await clearTokenAsync();
        await clearUserAsync();
        dispatch(handleLogout());
      }
    } catch (error) {
      await dispatch(actionLoadingStop());
      // dispatch(showToast('Lỗi hệ thống !', true));
    }
  };
}
