import React, {useEffect, useState, useContext} from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../globalStyles/Styles';
import SubmitBtn from '../component/submitBtn';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const GameResult = ({navigation}) => {
  const {quizAttempt, correctAns, questions} = useContext(QuestionApiData);
  const [gradeData, setGradeData] = useState({
    grade: null,
    comment: 'Worker harder',
    image: null,
  });

  useEffect(() => {
    console.log(quizAttempt);

    handleGrade(questions.length, correctAns);
  }, []);

  const handleGoToReview = () => {
    navigation.navigate('Review');
    //navigation.navigate('GameBoard');
  };

  let handleGrade = (noOfQuestions, marks) => {
    if (marks === noOfQuestions)
      setGradeData({
        grade: marks,
        comment: 'Excellent',
      });
    if (marks < noOfQuestions && marks > noOfQuestions * 0.5)
      setGradeData({
        grade: marks,
        comment: 'V.Good',
      });
    if (marks < noOfQuestions * 0.5 && marks > noOfQuestions * 0.25)
      setGradeData({
        grade: marks,
        comment: 'Credit',
      });
    if (marks < noOfQuestions * 0.25)
      setGradeData({
        grade: marks,
        comment: 'Fail',
      });
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.gameResultContainer}>
          <View style={styles.gameResultCard}>
            <View style={styles.resultImageContainer}>
              <Image
                source={require('../assets/img/trophy.jpg')}
                style={styles.resultImage}
              />
            </View>
            <View style={styles.marksContainer}>
              <Text style={styles.mark}>{correctAns}</Text>
              <Text>out of</Text>
              <Text style={styles.mark}>{questions.length}</Text>
            </View>
            <View style={styles.commentContainer}>
              <View style={styles.resultSeparator}></View>
              <View>
                <Text style={styles.comment}>{gradeData.comment}</Text>
              </View>
              <View style={styles.resultSeparator}></View>
            </View>
          </View>
          <View style={styles.statCard}>
            <View style={styles.statHeadContainer}>
              <View style={styles.statHead}>
                <Text style={styles.statHeadText}>Statistics</Text>
              </View>
              <View style={styles.resultSeparator}></View>
            </View>
            <View style={styles.statBodyContainer}>
              <View style={styles.statbody}>
                <Text style={styles.statBodyText}>Stats</Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <SubmitBtn
              btnText={'Review'}
              width={300}
              borderRadius={30}
              action={handleGoToReview}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default GameResult;
