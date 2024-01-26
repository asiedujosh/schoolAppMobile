import React, {useEffect, useState, useContext} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import styles from '../globalStyles/Styles';
import SubmitBtn from '../component/submitBtn';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {RecordApiData} from '../contextApi/records/recordsContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const GameResult = ({navigation}) => {
  const {quizAttempt, correctAns, questions, review, setReview} =
    useContext(QuestionApiData);
  const {userProfile} = useContext(AuthApiData);
  const {processSaveRecords, saveInfoAlert, setSaveInfoAlert} =
    useContext(RecordApiData);
  const [gradeData, setGradeData] = useState({
    grade: null,
    comment: 'Worker harder',
    image: null,
  });

  useEffect(() => {
    (quizAttempt.userInfo = userProfile.username), console.log(quizAttempt);
    setReview(quizAttempt.solvedQuestions);
    handleGrade(questions.length, correctAns);
  }, []);

  saveInfoAlert &&
    Alert.alert('Success', 'Your data was saved successfully', [
      {
        text: 'Ok',
        onPress: () => {
          setSaveInfoAlert(false);
        },
      },
    ]);

  const handleGoToReview = () => {
    navigation.navigate('Review');
    //navigation.navigate('GameBoard');
  };

  const handleSaveInfo = () => {
    let data2 = {
      correctAns: correctAns,
      totalQuestions: questions.length,
      status: 'complete',
    };
    processSaveRecords(quizAttempt, data2);
  };

  const handleShareInfo = () => {
    console.log('Share info');
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
          <View style={styles.buttonContainer2}>
            <View style={styles.containerButton2}>
              <SubmitBtn
                btnText={'Review'}
                width={90}
                borderRadius={20}
                action={handleGoToReview}
              />
            </View>
            <View style={styles.containerButton2}>
              <SubmitBtn
                btnText={'Save'}
                width={90}
                borderRadius={20}
                color={'#0AAB1F'}
                action={handleSaveInfo}
              />
            </View>
            <View style={styles.containerButton2}>
              <SubmitBtn
                btnText={'Share'}
                width={90}
                color={'#000000'}
                borderRadius={20}
                action={handleShareInfo}
              />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default GameResult;
