import React, {useState, createContext, useEffect} from 'react';
import generateUniqueID from '../../utils/generateId';
import {
  getAllExams,
  getAllSubject,
  getAllYear,
  getSelectectedQuestions,
} from './question';
// import {Login, Register} from './question';
export const QuestionApiData = createContext();

const QuestionApiDataProvider = props => {
  const [examsList, setExamsList] = useState([]);
  const [questionInfo, setQuestionInfo] = useState();
  const [quizAttempt, setQuizAttempt] = useState();
  const [examOptions, setExamOptions] = useState();
  const [yearOptions, setYearOptions] = useState();
  const [subjectOptions, setSubjectOptions] = useState();
  const [yearList, setYearList] = useState([]);
  const [solvedQuestions, setSolvedQuestions] = useState([]);
  const [review, setReview] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const [topicList, setTopicList] = useState([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [questions, setQuestions] = useState();
  const [correctAns, setCorrectAns] = useState(0);

  useEffect(() => {
    if (questions && questions.length > 0) {
      prepareQuestionsToBeAnswered(questions, questionInfo);
      // console.log(questions.length);
    }
  }, [questions]);

  const processGetAllExams = async () => {
    let response = await getAllExams();
    if (response) {
      setExamsList(response.data.data);
      processExamsOptions(response.data.data);
    }
  };

  const processExamsOptions = async data => {
    let exams = ['Quiz type'];
    data &&
      data.map(item => {
        exams.push(item.exam);
      });
    setExamOptions(exams);
  };

  const processGetAllYear = async () => {
    let response = await getAllYear();
    if (response) {
      setYearList(response.data.data);
      processYearOptions(response.data.data);
    }
  };

  const processGetAllSubject = async () => {
    let response = await getAllSubject();
    if (response) {
      setSubjectList(response.data.data);
      processSubjectOptions(response.data.data);
    }
  };

  const processSubjectOptions = async data => {
    let subjects = ['Subject'];
    data &&
      data.map(item => {
        subjects.push(item.subject);
      });
    setSubjectOptions(subjects);
  };

  const processYearOptions = async data => {
    let years = ['Year'];
    data &&
      data.map(item => {
        years.push(item.year);
      });
    setYearOptions(years);
  };

  const processGetAllTopic = async () => {
    let response = await getAllTopic();
    if (response) {
      setTopicList(response.data.data);
    }
  };

  //Map Id to corresponding options
  const mapId = (item, itemList, name) => {
    let filteredItem = itemList.filter(items => items[name] === item);
    return filteredItem && filteredItem[0] && filteredItem[0].id;
    // return filteredItem[0].id
  };

  const processGetQuestions = async data => {
    // questionStyle: data.questionStyle || null,
    //   timer: data.timer || null,
    let formData = {
      examType: mapId(data.quizType, examsList, 'exam'),
      year: mapId(data.year, yearList, 'year'),
      subject: mapId(data.subject, subjectList, 'subject'),
      questionNos: data.questionNos || null,
    };

    let info = {
      examsType: data.quizType,
      year: data.year,
      subject: data.subject,
      timer: data.timer || null,
      questionStyle: data.questionStyle,
    };

    setQuestionInfo(info);

    console.log(formData);
    let response = await getSelectectedQuestions(formData);
    if (response) {
      console.log(response);
      setQuestions(response.data.data);
      setLoadingQuestions(false);
    }
  };

  const prepareQuestionsToBeAnswered = (data, info) => {
    console.log('We are working');

    //step 2
    let attemptQuestArray = [];
    data.map(item => {
      let newData = {
        id: item.id,
        examId: item.examId,
        yearId: item.yearId,
        subjectId: item.subjectId,
        topicId: item.topicId,
        questionNo: item.questionNo,
        question: item.question,
        options: item.options,
        answer: item.answer,
        userChoice: null,
      };

      attemptQuestArray.push(newData);
    });

    //Step 1
    setQuizAttempt({
      quizId: generateUniqueID(),
      userInfo: 'josh',
      quizInfo: info,
      solvedQuestions: attemptQuestArray,
    });

    console.log('We are working');
  };

  const updateQuizAttempt = (id, newData) => {
    setQuizAttempt(prevQuizAttempt => {
      // Create a copy of the state
      const updatedSolvedQuestions = [...prevQuizAttempt.solvedQuestions];

      // Find the index of the question with the given ID
      const questionIndex = updatedSolvedQuestions.findIndex(
        question => question.id === id,
      );

      // Update the userChoice for the found question
      if (questionIndex !== -1) {
        updatedSolvedQuestions[questionIndex] = {
          ...updatedSolvedQuestions[questionIndex],
          userChoice: newData,
        };
      }

      // Return the updated state
      return {
        ...prevQuizAttempt,
        solvedQuestions: updatedSolvedQuestions,
      };
    });
  };

  const processQuizAttempt = (id, ans, userAns) => {
    console.log(userAns);
    if (userAns) {
      if (ans.toLowerCase() === userAns.toLowerCase()) {
        setCorrectAns(prev => prev + 1);
      }
    } else {
      userAns = 'None';
    }

    updateQuizAttempt(id, userAns);
  };

  return (
    <QuestionApiData.Provider
      value={{
        solvedQuestions,
        setSolvedQuestions,
        processGetAllYear,
        processGetAllExams,
        processGetAllSubject,
        processGetQuestions,
        setQuestions,
        examsList,
        yearList,
        subjectList,
        yearOptions,
        examOptions,
        subjectOptions,
        questions,
        questionInfo,
        loadingQuestions,
        setLoadingQuestions,
        processQuizAttempt,
        correctAns,
        quizAttempt,
        review,
        setReview,
        setSolvedQuestions,
        setCorrectAns
      }}>
      {props.children}
    </QuestionApiData.Provider>
  );
};

export default QuestionApiDataProvider;
