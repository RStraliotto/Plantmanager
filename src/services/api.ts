import axios from 'axios';

const api = axios.create({

    baseURL:'http://10.234.234.1:2000',

});

let countReq = 0;

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    if (config.method === "get") {
      ++countReq;
    }
    console.log(
      
    );
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;