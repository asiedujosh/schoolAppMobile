import {URL, TIMEOUT, SUCCESS_STATUS} from '../../constant/httpConstant';
import axios from 'axios';

export const getAllNews = async () => {
  try {
    let responseOnGetAllNews = await axios.get(`${URL}/api/getAllNews`);
    if (responseOnGetAllNews.status === SUCCESS_STATUS) {
      return responseOnGetAllNews.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
