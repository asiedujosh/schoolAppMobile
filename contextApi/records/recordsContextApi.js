import React, {useState, createContext, useEffect} from 'react';
import {saveRecords, getSavedRecordsOfUser, getRecordReview} from './records';
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
  };

  let processGetUserRecords = async data => {
    let response = await getSavedRecordsOfUser(data);
    if (response) {
      // console.log(response.data);
      setSavedRecords(response.data);
    }
  };

  let processGetRecordReview = async data => {
    let response = await getRecordReview(data);
    if (response) {
      // const dataObject = JSON.parse(response.data);
      // console.log(response.data.questions[0].solvedQuestions[0].question);
      // console.log(response.data.userInfo);
      setRecordReviewInfo(response.data.userInfo);
      setRecordReviewMark(response.data.mark);
      setRecordReviewDetail(
        JSON.parse(response.data.questions[0].solvedQuestions),
      );
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
      }}>
      {props.children}
    </RecordApiData.Provider>
  );
};

export default RecordApiDataProvider;
