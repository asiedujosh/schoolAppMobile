import {URL, TIMEOUT, SUCCESS_STATUS} from '../../constant/httpConstant';
import axios from 'axios';

export const Login = async data => {
  try {
    let responseOnLogin = await axios.post(`${URL}/api/mobileLogin`, data);
    if (responseOnLogin.status === SUCCESS_STATUS) {
      return responseOnLogin.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const Register = async data => {
  try {
    let responseOnRegister = await axios.post(
      `${URL}/api/mobileRegister`,
      data,
      {
        headers: {
          'content-type': 'text/json',
          Accept: 'application/json',
        },
      },
    );
    if (responseOnRegister.status === SUCCESS_STATUS) {
      return responseOnRegister.data;
    } else {
      console.log('There was an error');
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};
