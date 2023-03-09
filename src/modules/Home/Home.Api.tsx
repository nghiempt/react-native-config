import axiosClient from '../../utils/ApiUtils';
import {ApiUrl} from '../../constant/apiUrl';
import {handleLogout} from '../../redux/actions/UserAction';
import {clearTokenAsync} from '../../utils/storage/TokenStorageUtil';
import {clearUserAsync} from '../../utils/storage/UserStorageUtil';
import {
  actionLoadingStart,
  actionLoadingStop,
} from '../../components/Loading/Loading.State';
import {showToast} from '../../components/Toast/Toast.State';

/* --------------------------- Đăng xuất -------------------------- */
export function loadType() {
  return async (dispatch: any) => {
    try {
      await dispatch(actionLoadingStart());
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
      dispatch(showToast('Load thành công', true));
    }
  };
}
