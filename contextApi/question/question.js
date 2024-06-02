import {URL, TIMEOUT, SUCCESS_STATUS} from '../../constant/httpConstant';
import axios from 'axios';

export const getAllExams = async () => {
  try {
    let responseOnGetAllExams = await axios.get(`${URL}/api/mobileGetAllExam`);
    if (responseOnGetAllExams.status === SUCCESS_STATUS) {
      return responseOnGetAllExams.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getAllYear = async () => {
  try {
    let responseOnGetAllYear = await axios.get(`${URL}/api/mobileGetAllYear`);
    if (responseOnGetAllYear.status === SUCCESS_STATUS) {
      return responseOnGetAllYear.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getAllSubject = async () => {
  try {
    let responseOnGetAllSubject = await axios.get(
      `${URL}/api/mobileGetAllSubject`,
    );
    if (responseOnGetAllSubject.status === SUCCESS_STATUS) {
      return responseOnGetAllSubject.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getAllTopic = async () => {
  try {
    let responseOnGetAllTopic = await axios.get(`${URL}/api/mobileGetAllTopic`);
    if (responseOnGetAllTopic.status === SUCCESS_STATUS) {
      return responseOnGetAllTopic.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getSelectectedQuestions = async data => {
  try {
    let responseOnGetQuestion = await axios.get(
      `${URL}/api/getSelectedQuestion?examType=${data.examType}&year=${data.year}&subject=${data.subject}&questionNos=${data.questionNos}`,
    );
    if (responseOnGetQuestion.status === SUCCESS_STATUS) {
      return responseOnGetQuestion.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getSelectedOralQuestions = async data => {
  try {
    let responseOnGetOralQuestion = await axios.get(
      `${URL}/api/getSelectedOralQuestion?examType=${data.examType}&year=${data.year}&subject=${data.subject}&questionNos=${data.questionNos}`,
    );
    if (responseOnGetOralQuestion.status === SUCCESS_STATUS) {
      return responseOnGetOralQuestion.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
