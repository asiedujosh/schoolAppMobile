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

export const saveOralRecords = async data => {
  try {
    let responseOnSaveOralRecords = await axios.post(
      `${URL}/api/addOralQuizRecords`,
      data,
    );
    if (responseOnSaveOralRecords.status === SUCCESS_STATUS) {
      return responseOnSaveOralRecords.data;
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

export const getSavedOralRecordsOfUser = async data => {
  try {
    let responseOnGetUserOralRecords = await axios.get(
      `${URL}/api/getOralRecordsOfUser?userId=${data.userId}`,
    );
    if (responseOnGetUserOralRecords.status === SUCCESS_STATUS) {
      return responseOnGetUserOralRecords.data;
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

export const getOralRecordReview = async data => {
  try {
    let responseOnGetOralRecordReview = await axios.get(
      `${URL}/api/getOralRecordReview?quizId=${data}`,
    );
    if (responseOnGetOralRecordReview.status === SUCCESS_STATUS) {
      return responseOnGetOralRecordReview.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const deleteRecord = async data => {
  try {
    let responseOnDeleteRecord = await axios.delete(`${URL}/api/deleteRecord`, {
      data: data, // Pass the data in the config object
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header if sending JSON data
      },
    });

    if (responseOnDeleteRecord.status === SUCCESS_STATUS) {
      return responseOnDeleteRecord.data;
    }
  } catch (err) {
    console.error(err);
  }
};

export const deleteOralRecord = async data => {
  try {
    let responseOnDeleteOralRecord = await axios.delete(
      `${URL}/api/deleteOralRecord`,
      {
        data: data,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (responseOnDeleteOralRecord.status === SUCCESS_STATUS) {
      return responseOnDeleteOralRecord.data;
    }
  } catch (err) {
    console.error(err);
  }
};
