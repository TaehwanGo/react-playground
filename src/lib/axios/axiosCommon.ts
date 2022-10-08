import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log('config', config);
    return config;
  },
  (error) => {
    console.log('error', error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (res) => {
    console.log('res', res);
    return res;
  },
  (err) => {
    console.log('err', err);
    return Promise.reject(err);
  },
);

export default axiosInstance;
