import axios, { AxiosRequestConfig } from 'axios';
import config from '@config/index';

const requestConfig: AxiosRequestConfig = {
  baseURL: `${config.baseUrl}/api`,
};

export const Axios = axios.create(requestConfig);

export const axiosFetcher = async (url: string, config: AxiosRequestConfig) => {
  try {
    const res = await Axios({
      url,
      ...config,
    });
    const data = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};
