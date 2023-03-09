import axiosClient from '../../utils/ApiUtils';
import {ApiUrl} from '../../constant/apiUrl';
import {
  actionLoadingStart,
  actionLoadingStop,
} from '../../components/Loading/Loading.State';
import {hasLocationPermission} from '../../utils/checkPermisionLocation';
import Geolocation from 'react-native-geolocation-service';
import {StoreActions} from './Store.State';

/* --------------------------- get all store -------------------------- */
export function getUserLocation() {
  return async (dispatch: (arg0: {type: string}) => any) => {
    try {
      const hasLocation = await hasLocationPermission();
      if (!hasLocation) {
        return;
      }
      Geolocation.getCurrentPosition(async (position) => {
        console.log(position);
      });
    } catch (error) {
      await dispatch(actionLoadingStop());
    }
  };
}

/* --------------------------- get all store -------------------------- */
export function loadStore(
  param: {key: string},
  body: {
    Name: null;
    provinceId: null;
    districtId: null;
    addressI_Id: null;
    addressII_Id: null;
    typeStoreId: null;
    Coordinates: null;
  },
) {
  return async (dispatch: (arg0: {type: string}) => void) => {
    try {
      dispatch(actionLoadingStart());
      const resp = await axiosClient.post(ApiUrl.LOAD_STORE, body, {
        params: param,
      });
      dispatch(actionLoadingStop());
      if (resp.data.data) {
        dispatch(StoreActions.saveListStore(resp.data.data));
        return true;
      }
    } catch (error) {
      dispatch(actionLoadingStop());
    }
  };
}

/* --------------------------- get all store -------------------------- */
export function loadType(param: {key: string}) {
  return async (dispatch: (arg0: {type: string}) => void) => {
    try {
      dispatch(actionLoadingStart());
      const resp = await axiosClient.get(ApiUrl.LOAD_TYPE, {
        params: param,
      });
      dispatch(actionLoadingStop());
      if (resp.data.data) {
        dispatch(StoreActions.saveListTyle(resp.data.data));
        return true;
      }
    } catch (error) {
      dispatch(actionLoadingStop());
    }
  };
}

/* --------------------------- get all store -------------------------- */
export function getStoreById(param: undefined) {
  return async (dispatch: (arg0: {type: string}) => any) => {
    try {
      await dispatch(actionLoadingStart());
      const resp = await axiosClient.get(ApiUrl.GET_STORE, {
        params: param,
      });
      await dispatch(actionLoadingStop());
      if (resp.data.data) {
        return resp.data.data;
      }
    } catch (error) {
      await dispatch(actionLoadingStop());
    }
  };
}
