import React, {useState, createContext, useEffect} from 'react';
import {
  saveRecords,
  getSavedRecordsOfUser,
  getRecordReview,
  deleteRecord,
} from './records';
// import {Login, Register} from './question';
export const RecordApiData = createContext();

const RecordApiDataProvider = props => {
  const [saveInfoAlert, setSaveInfoAlert] = useState(false);
  const [infoSaved, setInfoSaved] = useState(false);
  const [savedRecords, setSavedRecords] = useState();
  const [recordReviewDetail, setRecordReviewDetail] = useState([]);
  const [recordReviewMark, setRecordReviewMark] = useState();
  const [recordReviewInfo, setRecordReviewInfo] = useState([]);
  const [reviewId, setReviewId] = useState();

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

  return (
    <RecordApiData.Provider
      value={{
        infoSaved,
        setInfoSaved,
        processSaveRecords,
        processGetUserRecords,
        processGetRecordReview,
        saveInfoAlert,
        setSaveInfoAlert,
        savedRecords,
        recordReviewDetail,
        reviewId,
        setReviewId,
        recordReviewMark,
        recordReviewInfo,
        processDeleteRecord,
      }}>
      {props.children}
    </RecordApiData.Provider>
  );
};

export default RecordApiDataProvider;
