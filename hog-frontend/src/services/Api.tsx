import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json"
  }
});

// Check if access token is expired at each request
instance.interceptors.response.use(
  (res) => {
    console.log("triggered");
    return res;
  },
  async (err) => {
    console.log("triggered error");
    const originalConfig = err.config;
    console.log(err.response);
    console.log(originalConfig);
    if (originalConfig.url !== "auth/login" && err.response) {
      console.log("reached")
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        console.log("token expired")
        originalConfig._retry = true;
        try {
          await instance.post("/auth/refresh");
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
)

export default instance;

