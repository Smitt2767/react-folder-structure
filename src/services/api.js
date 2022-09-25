import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}`;

class Axios {
  constructor(baseURL) {
    this.axios = axios.create({
      baseURL,
    });

    this.axios.interceptors.request.use(this.#requestMiddleware);

    this.axios.interceptors.response.use(
      this.#responseMiddleware,
      this.#responseErr
    );
  }

  #requestMiddleware = (req) => {
    return req;
  };

  #responseMiddleware = (response) => {
    return response;
  };

  #responseErr = (error) => {
    return Promise.reject(error);
  };
}

const api = new Axios(API_URL).axios;

export { api };
