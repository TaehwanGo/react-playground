import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:4000',
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default axiosInstance;
