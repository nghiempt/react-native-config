import AsyncStorage from '@react-native-async-storage/async-storage';

const URL_KEY = '@Url';

export var urlMemory = '';

const cacheUrlStorage = async (strUrl: string) => {
  try {
    await AsyncStorage.setItem(URL_KEY, strUrl);
  } catch (error) {
    throw error;
  }
};

const cacheUrlMemory = (strUrl: string) => {
  urlMemory = strUrl;
};

export const cacheUrlAsync = async (strUrl: any) => {
  try {
    await cacheUrlStorage(strUrl);
    cacheUrlMemory(strUrl);
  } catch (error) {
    throw error;
  }
};

const getUrlStorage = async () => {
  try {
    const value = await AsyncStorage.getItem(URL_KEY);
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};

const getUrlMemory = () => {
  return urlMemory;
};

export const getUrlAsync = async () => {
  let url = getUrlMemory();
  if (url) {
    return url;
  } else {
    try {
      return await getUrlStorage();
    } catch (error) {
      throw error;
    }
  }
};

const clearUrlStorage = async () => {
  try {
    await AsyncStorage.removeItem(URL_KEY);
  } catch (error) {
    throw error;
  }
};

const clearUrlMemory = () => {
  urlMemory = '';
};

export const clearUrlAsync = async () => {
  try {
    await clearUrlStorage();
    clearUrlMemory();
  } catch (error) {
    throw error;
  }
};
