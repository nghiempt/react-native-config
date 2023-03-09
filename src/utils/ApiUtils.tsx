import axios from 'axios';
import queryString from 'query-string';
import {API_URL} from '../constant/apiUrl';
import {getToken, getUserInfo} from './UserUtils';

export const getFormData = (formObject: any) => {
  let formBody = new FormData();
  for (let property in formObject) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = formObject[property];
    if (encodedKey === 'files') {
      encodedValue.map((obj: any) => {
        formBody.append('files', obj);
      });
    } else {
      formBody.append(encodedKey, encodedValue);
    }
  }
  return formBody;
};

const axiosClient = axios.create({
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With',
  },

  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config: any) => {
  const token = await getToken();
  config.baseURL = API_URL;
  const user = await getUserInfo();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    if (config.method === 'get' || config.method === 'path') {
      const param = config.params;
      if (param) {
        param.department_id = user.dataUser.user_department.id;
        config.params = param;
      }
    } else {
      const data = config.data;
      if (data) {
        data.department_id = user.dataUser.user_department.id;
        config.data = data;
      }
    }
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  (error) => {
    console.log('ERROR: ', error.response);
    throw error;
  },
);
export default axiosClient;
