import axios from "axios";

import Cookies, { cookiesKeys } from "./cookies";
// import store from "store";
// import { logout } from "store/auth/actions";

// TODO: check this before deploy
const API_URL_ACCOUNT = `${process.env.REACT_APP_API_ACCOUNT_URL}/api/v1`;

class Axios {
  constructor(baseURL) {
    this.axios = axios.create({
      baseURL,
    });

    this.axios.interceptors.request.use(this._requestMiddleware);

    this.axios.interceptors.response.use(
      this._responseMiddleware,
      this._responseErr
    );
  }

  _requestMiddleware = (req) => {
    // Send Bearer token on every request
    const token = Cookies.get(cookiesKeys.TOKEN);
    if (!!token) req.headers.authorization = "Bearer " + token;
    return req;
  };

  _responseMiddleware = (response) => {
    //  Do something on every success full response
    return response;
  };

  _responseErr = (error) => {
    if (error?.response?.status === 401) {
      //   Logout / Redirect

      //   EX:
      //   Cookies.clear();
      //   store.dispatch(logout());
      return Promise.reject(error);
    }
    return Promise.reject(error);
  };
}

const axiosAccount = new Axios(API_URL_ACCOUNT).axios;

export { axiosAccount };
