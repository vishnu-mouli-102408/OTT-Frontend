import axios from "axios";
import { DEV_API } from "../env";
export const userRegistration = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${DEV_API}/api/v1/register`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });
};
export const userLogin = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${DEV_API}/api/v1/login`, data)
      .then((response) => {
        console.log(response);
        resolve(response);
      })
      .catch((err) => reject(err));
  });
};
export const sendOTP = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${DEV_API}/api/v1/sendOTP`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });
};
export const verifyOTP = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    axios
      .post(`${DEV_API}/api/v1/verifyOTP`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });
};
