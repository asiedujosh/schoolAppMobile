import {useState, useContext} from 'react';
import {Pressable} from 'react-native';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import styles from '../globalStyles/Styles';
import Icon from 'react-native-vector-icons/Feather';


const HomeBtn = ({handleHome}) => {
  const {processGetAllExams, processGetAllYear, processGetAllSubject,  setSolvedQuestions,
    setCorrectAns, setQuestions, setReview} =
    useContext(QuestionApiData);

  return (
    <Pressable
    style={({pressed}) => [styles.homeBtnTwo,
      {backgroundColor: pressed ? 'lightblue' : '#FFFFFF'},
      styles.buttonCircle, 
    ]}
      onPress={() => {
      setReview([])
      setQuestions()
      setSolvedQuestions([])
      setCorrectAns(0)
      handleHome()
       
      }}>
      <Icon name="home" size={25} color="#0347A1" />
    </Pressable>
  );
};

export default HomeBtn;
