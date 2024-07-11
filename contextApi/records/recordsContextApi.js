import React, {useState, createContext, useEffect} from 'react';
import {
  saveRecords,
  saveOralRecords,
  getSavedRecordsOfUser,
  getSavedOralRecordsOfUser,
  getRecordReview,
  getOralRecordReview,
  deleteRecord,
  deleteOralRecord,
} from './records';
// import {Login, Register} from './question';
export const RecordApiData = createContext();

const RecordApiDataProvider = props => {
  const [saveInfoAlert, setSaveInfoAlert] = useState(false);
  const [infoSaved, setInfoSaved] = useState(false);
  const [savedRecords, setSavedRecords] = useState();
  const [oralSavedRecords, setOralSavedRecords] = useState();
  const [recordReviewDetail, setRecordReviewDetail] = useState([]);
  const [oralRecordReviewDetail, setOralRecordReviewDetail] = useState([]);
  const [recordReviewMark, setRecordReviewMark] = useState();
  const [oralRecordReviewMark, setOralRecordReviewMark] = useState();
  const [recordReviewInfo, setRecordReviewInfo] = useState([]);
  const [oralRecordReviewInfo, setOralRecordReviewInfo] = useState([]);
  const [reviewId, setReviewId] = useState();
  const [oralReviewId, setOralReviewId] = useState();

  let processSaveRecords = async (data1, data2) => {
    try {
      let newData = {
        quizId: data1.quizId,
        userId: data1.userInfo,
        quizInfo: data1.quizInfo,
        solvedQuestion: data1.solvedQuestions,
        correctAns: data2.correctAns,
        totalQues: data2.totalQuestions,
        status: data2.status,
      };

      let response = await saveRecords(newData);
      if (response) {
        setSaveInfoAlert(true);
        setInfoSaved(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  let processSaveOralRecords = async (data1, data2) => {
    try {
      let newData = {
        quizId: data1.quizId,
        userId: data1.userInfo,
        quizInfo: data1.quizInfo,
        solvedQuestion: data1.solvedQuestions,
        correctAns: data2.correctAns,
        totalQues: data2.totalQuestions,
        status: data2.status,
      };

      let response = await saveOralRecords(newData);
      if (response) {
        setSaveInfoAlert(true);
        setInfoSaved(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  let processGetUserRecords = async data => {
    try {
      let response = await getSavedRecordsOfUser(data);
      if (response) {
        // console.log(response.data);
        setSavedRecords(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  let processGetOralUserRecords = async data => {
    console.log(data);
    try {
      let response = await getSavedOralRecordsOfUser(data);
      if (response) {
        setOralSavedRecords(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  let processGetRecordReview = async data => {
    try {
      let response = await getRecordReview(data);
      if (response) {
        setRecordReviewInfo(response.data.userInfo);
        setRecordReviewMark(response.data.mark);
        setRecordReviewDetail(
          JSON.parse(response.data.questions[0].solvedQuestions),
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  let processGetOralRecordReview = async data => {
    try {
      let response = await getOralRecordReview(data);
      if (response) {
        setOralRecordReviewInfo(response.data.userInfo);
        setOralRecordReviewMark(response.data.mark);
        setOralRecordReviewDetail(
          JSON.parse(response.data.questions[0].solvedQuestions),
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  let processDeleteRecord = async data => {
    try {
      let response = await deleteRecord(data);
      if (response) {
        processGetUserRecords({userId: data.userId});
      }
    } catch (err) {
      console.log(err);
    }
  };

  let processDeleteOralRecord = async data => {
    try {
      let response = await deleteOralRecord(data);
      if (response) {
        processGetOralUserRecords({userId: data.userId});
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RecordApiData.Provider
      value={{
        infoSaved,
        setInfoSaved,
        processSaveRecords,
        processSaveOralRecords,
        processGetUserRecords,
        processGetOralUserRecords,
        processGetRecordReview,
        processGetOralRecordReview,
        saveInfoAlert,
        setSaveInfoAlert,
        savedRecords,
        oralSavedRecords,
        oralRecordReviewDetail,
        oralRecordReviewMark,
        oralRecordReviewInfo,
        recordReviewDetail,
        reviewId,
        oralReviewId,
        setReviewId,
        setOralReviewId,
        recordReviewMark,
        recordReviewInfo,
        processDeleteRecord,
        processDeleteOralRecord,
      }}>
      {props.children}
    </RecordApiData.Provider>
  );
};

export default RecordApiDataProvider;
