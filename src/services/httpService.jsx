import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (expectedError) {
    return Promise.reject(error);
  }
  if (!expectedError) {
    logger.log(error);
    toast.error("Unexpected error occurred.");
  }
  return Promise.reject(error);
});

export function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = auth.getJwt();
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
