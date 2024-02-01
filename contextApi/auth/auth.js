import {
  URL,
  TIMEOUT,
  SUCCESS_STATUS,
  NOTFOUND,
  TIMEEXCEED,
  UNHANDLEERR,
  SIGNINERR,
  BAD_REQUEST_STATUS,
} from '../../constant/httpConstant';
import axios from 'axios';
import axiosRetry from 'axios-retry';
// import { TABLECONSTANTS } from "@/app/constant/IndividualConstants"
axiosRetry(axios, {retries: 3, retryDelay: axiosRetry.exponentialDelay});

export const Login = async data => {
  try {
    let responseOnLogin = await axios.post(
      `${URL}/api/mobileLogin`,
      data,
      TIMEOUT,
    );
    if (responseOnLogin.status === SUCCESS_STATUS) {
      return responseOnLogin.data;
    } else {
      return false;
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log('Network error occurred. Retrying...');
      return TIMEEXCEED;
    } else if (axiosRetry.isRetryableError(err)) {
      console.log('Retrying due to timeout...');
      throw err;
    } else if (err.response && err.response.status === 404) {
      console.warn('Resource not found (404)');
      // Handle 404 response as needed
      return NOTFOUND;
    } else if (err.code.code === 'ECONNABORTED') {
      // Handle timeout error as needed
      console.error('Request timed out.');
      return TIMEEXCEED;
    } else if (err.response.status === 401) {
      // Handle signin error
      return SIGNINERR;
    } else if (err.response.status === 400) {
      return BAD_REQUEST_STATUS;
    } else {
      // Handle other errors
      console.error('Unhandled error:', err);
      return UNHANDLEERR;
    }
  }
};

export const Register = async data => {
  try {
    let responseOnRegister = await axios.post(
      `${URL}/api/mobileRegister`,
      data,
      TIMEOUT,
    );
    if (responseOnRegister.status === SUCCESS_STATUS) {
      return responseOnRegister.data;
    } else {
      return responseOnRegister.message;
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log('Network error occurred. Retrying...');
      return TIMEEXCEED;
    } else if (axiosRetry.isRetryableError(err)) {
      console.log('Retrying due to timeout...');
      throw err;
    } else if (err.response && err.response.status === 404) {
      console.warn('Resource not found (404)');
      // Handle 404 response as needed
      return NOTFOUND;
    } else if (err.code.code === 'ECONNABORTED') {
      // Handle timeout error as needed
      console.error('Request timed out.');
      return TIMEEXCEED;
    } else if (err.response.status === 401) {
      // Handle signin error
      return SIGNINERR;
    } else if (err.response.status === 400) {
      return BAD_REQUEST_STATUS;
    } else {
      // Handle other errors
      console.error('Unhandled error:', err);
      return UNHANDLEERR;
    }
  }
};
