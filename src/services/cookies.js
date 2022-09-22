import cookies from "js-cookie";

const cookieConfig = {
  path: process.env.REACT_APP_COOKIE_PATH,
  domain: process.env.REACT_APP_COOKIE_DOMAIN,
  expires: +process.env.REACT_APP_COOKIE_EXPIRES,
};

export const cookieKeys = {
  TOKEN: "token",
};

class Cookies {
  static get(key) {
    return JSON.parse(cookies.get(key) || null);
  }

  static set(key, value, config = cookieConfig) {
    return cookies.set(key, JSON.stringify(value), config);
  }

  static remove(key, config = cookieConfig) {
    cookies.remove(key, config);
  }

  static clear() {
    Object.values(cookieKeys).forEach((key) => {
      Cookies.remove(key);
    });
  }
}

export default Cookies;
