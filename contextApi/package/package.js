import {URL, TIMEOUT, SUCCESS_STATUS} from '../../constant/httpConstant';
import axios from 'axios';

export const getAPackage = async () => {
  try {
    let responseOnGetPackage = await axios.get(`${URL}/api/currentPackage`);
    if (responseOnGetPackage.status === SUCCESS_STATUS) {
      return responseOnGetPackage.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const subscribe = async data => {
  try {
    let responseOnSubscribe = await axios.put(
      `${URL}/api/clientUpgradePackage/${data.id}`,
      data,
    );
    if (responseOnSubscribe.status === SUCCESS_STATUS) {
      return responseOnSubscribe.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};
