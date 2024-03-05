import {URL, TIMEOUT, SUCCESS_STATUS} from '../../constant/httpConstant';
import axios from 'axios';

export const getStoreProducts = async () => {
  try {
    let responseOnGetStore = await axios.get(
      `${URL}/api/getAllLinkedExamSubject`,
    );
    if (responseOnGetStore.status === SUCCESS_STATUS) {
      return responseOnGetStore.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getPurchases = async data => {
  try {
    let responseOnGetPurchase = await axios.get(
      `${URL}/api/userPurchases?userId=${data}`,
    );
    if (responseOnGetPurchase.status === SUCCESS_STATUS) {
      return responseOnGetPurchase.data;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const purchaseSubjects = async data => {
  try {
    let responseOnPurchase = await axios.post(
      `${URL}/api/storePurchases`,
      data,
    );
    if (responseOnPurchase.status === SUCCESS_STATUS) {
      return responseOnPurchase.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
