import AxiosClient from './axios';

const sleep = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

// ////////////////////////////////

let axiosClient;

const initializeHttp = () => {
  axiosClient = new AxiosClient({
    baseURL: import.meta.env.VITE_BASE_URL_API,
    timeout: 60000, // 60 second
    transform
  });
  
  return axiosClient;
};

export default initializeHttp();
