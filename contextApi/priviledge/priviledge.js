import {URL, TIMEOUT, SUCCESS_STATUS} from '../../constant/httpConstant';
import axios from 'axios';

export const getAllPriviledge = async () => {
  try {
    let responseOnGetAllPriviledge = await axios.get(
      `${URL}/api/getAllMobilePriviledge`,
    );
    if (responseOnGetAllPriviledge.status === SUCCESS_STATUS) {
      return responseOnGetAllPriviledge.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
