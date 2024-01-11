import {URL, TIMEOUT} from '../constant/requestConstants';
import axios from 'axios';
import {retrieveUserSession, storeUserSession} from './localStore';

const instance = axios.create({
  baseURL: URL,
  timeout: TIMEOUT,
  withCredentials: true,
  crossDomain: true,
  headers: {
    'x-Requested-with': 'XMLHttpRequest',
    Accept: 'application/json',
  },
});

let accessToken;
let data = retrieveUserSession();
if (data) accessToken = data.token;

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      (async () => {
        const response = await axios.post('/admin/auth/refreshToken', {
          accessToken,
        });
        if (response.status === 200) {
          storeUserSession(response.data.accessToken, username);
          axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${response.data.accessToken}`;

          return axios(error.config);
        }
      })();
      return error;
    }
  },
);

export default instance;
