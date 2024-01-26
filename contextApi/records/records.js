import {URL, TIMEOUT, SUCCESS_STATUS} from '../../constant/httpConstant';
import axios from 'axios';

export const saveRecords = async data => {
  try {
    let responseOnSaveRecords = await axios.post(
      `${URL}/api/addQuizRecords`,
      data,
    );
    if (responseOnSaveRecords.status === SUCCESS_STATUS) {
      return responseOnSaveRecords.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getSavedRecordsOfUser = async data => {
  //console.log(data);
  try {
    let responseOnGetUserRecords = await axios.get(
      `${URL}/api/getRecordsOfUser?userId=${data.userId}`,
    );
    if (responseOnGetUserRecords.status === SUCCESS_STATUS) {
      return responseOnGetUserRecords.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getRecordReview = async data => {
  //console.log(data);
  try {
    let responseOnGetRecordReview = await axios.get(
      `${URL}/api/getRecordReview?quizId=${data}`,
    );
    if (responseOnGetRecordReview.status === SUCCESS_STATUS) {
      return responseOnGetRecordReview.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
