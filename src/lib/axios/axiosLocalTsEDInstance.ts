import axios from 'axios';

const LOCAL_SERVER_URL = 'http://localhost:8083';

const axiosLocalTsEDInstance = axios.create({
  baseURL: LOCAL_SERVER_URL,
});

axiosLocalTsEDInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.error(err);
    return Promise.reject(err);
  },
);

export default axiosLocalTsEDInstance;
