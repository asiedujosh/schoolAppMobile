import React, {useState, createContext, useEffect} from 'react';
import {subscribe, getAllExamSubjectLink} from './examSubjectRelation';

export const ExamSubjectApiData = createContext();

const ExamSubjectApiDataProvider = props => {
  const [examSubjectList, setExamSubjectList] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    processGetAllExamSubject();
  }, []);

  const processGetAllExamSubject = async () => {
    try {
      let response = await getAllExamSubjectLink();
      if (response) {
        setExamSubjectList(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getExamSubjectName = data => {
    try {
      let filteredData = examSubjectList.filter(
        item => item.examId == data.examId && item.subjectId == data.subjectId,
      );
      return filteredData;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ExamSubjectApiData.Provider
      value={{
        examSubjectList,
        getExamSubjectName,
      }}>
      {props.children}
    </ExamSubjectApiData.Provider>
  );
};

export default ExamSubjectApiDataProvider;
