import axios from 'axios';

const DATA_SERVER_URL = 'http://localhost:3000';

const axiosFiles = axios.create({
  baseURL: DATA_SERVER_URL,
  responseType: 'blob',
});

axiosFiles.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.error(err);
    return Promise.reject(err);
  },
);

export default axiosFiles;
