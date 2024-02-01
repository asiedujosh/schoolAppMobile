import React, {useEffect, useState, useContext} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import styles from '../globalStyles/Styles';
import SubmitBtn from '../component/submitBtn';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {RecordApiData} from '../contextApi/records/recordsContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const GameResultTwo = ({navigation}) => {
  const {quizAttempt, correctAns, questions, review, setReview} =
    useContext(QuestionApiData);

  //   useEffect(() => {
  //     (quizAttempt.userInfo = userProfile.username), console.log(quizAttempt);
  //     setReview(quizAttempt.solvedQuestions);
  //     handleGrade(questions.length, correctAns);
  //   }, []);

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.gameResultContainer}>
          <View style={[styles.gameResultTwoCard1]}>
            <View style={styles.gameResultScoreBoard}>
              <Text style={styles.gameResultScoreText}>Score: 5 Out of 7</Text>
            </View>
            <Image
              source={require('../assets/img/results.jpg')} // Replace with the actual path to your image
              style={[styles.image, styles.resultTwoImage]}
            />
            <View style={styles.markDetail}>
              <Text style={styles.markDetailText}>Very Good</Text>
            </View>
          </View>
          <View style={[styles.gameResultTwoCard1, styles.gameResultTwoCard2]}>
            <View style={styles.gameResultScoreBoard}>
              <Text style={styles.gameResultScoreText}>STATISTICS</Text>
            </View>
          </View>
          <View style={styles.gameResultTwoCard3}>
            <View style={styles.containerButton2}>
              <SubmitBtn
                btnText={'Review'}
                width={90}
                color={'#6490CC'}
                textColor={'#FFFFFF'}
                borderRadius={20}
                action={() => {
                  console.log('Review');
                }}
              />
            </View>
            <View style={styles.containerButton2}>
              <SubmitBtn
                btnText={'Save'}
                width={90}
                borderRadius={20}
                color={'#2C72D2'}
                textColor={'#FFFFFF'}
                action={() => {
                  console.log('Save');
                }}
              />
            </View>
            <View style={styles.containerButton2}>
              <SubmitBtn
                btnText={'Share'}
                width={90}
                color={'#042046'}
                textColor={'#FFFFFF'}
                borderRadius={20}
                action={() => {
                  console.log('Share');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default GameResultTwo;
