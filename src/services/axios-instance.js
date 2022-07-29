import axios from "axios";
import NProgress from "nprogress";

const instance = axios.create({
  timeout: 36000,
  headers: {},
});

instance.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    if (error.code === "ECONNABORTED") {
      // TODO: Add toast message

      return error;
    }
    // eslint-disable-next-line no-underscore-dangle
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config.__isRetryRequest
    ) {
      // TODO: do logout and route to login page
    }
    if (error.response.status === 500) {
      error.response.data.message = "Something went wrong, Please try again!";
    }
    return Promise.reject(error);
  }
);

export default instance;
