import React, {useEffect, useState, useContext} from 'react';
import {Text, View, Image, Alert, FlatList} from 'react-native';
import styles from '../globalStyles/Styles';
import SubmitBtn from '../component/submitBtn';
import positionMap from '../utils/positionMap.js';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {RecordApiData} from '../contextApi/records/recordsContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
// import {FlatList} from 'react-native-gesture-handler';

const GameResult = ({navigation}) => {
  const {quizAttempt, correctAns, questions, review, setReview, topicList} =
    useContext(QuestionApiData);
  const {userProfile} = useContext(AuthApiData);
  const {processSaveRecords, saveInfoAlert, setSaveInfoAlert} =
    useContext(RecordApiData);
  const [gradeData, setGradeData] = useState({
    grade: null,
    comment: 'Worker harder',
    image: null,
  });

  const [topicEvaluation, setTopicEvaluation] = useState([]);
  const [allCorrectTopicInQuestion, setAllCorrectTopicInQuestion] = useState(
    [],
  );
  const [positionReady, setPositionReady] = useState([]);

  useEffect(() => {
    (quizAttempt.userInfo = userProfile.username), console.log(quizAttempt);
    setReview(quizAttempt.solvedQuestions);
    handleGrade(questions.length, correctAns);
    setTopicEvaluation(quizAttempt.solvedQuestions);
    let data = quizAttempt.solvedQuestions.filter(
      item => item.userChoice.toLowerCase() == item.answer.toLowerCase(),
    );
    setAllCorrectTopicInQuestion(data);
  }, []);

  useEffect(() => {
    let newData = positionMap(
      allCorrectTopicInQuestion,
      topicEvaluation,
      topicList,
    );
    setPositionReady(newData);
  }, [topicEvaluation]);

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
          <View style={[styles.gameResultTwoCard1]}>
            <View style={styles.gameResultScoreBoard}>
              <Text style={styles.gameResultScoreText}>
                Score: {correctAns} Out of {questions.length}
              </Text>
            </View>
            <Image
              source={require('../assets/img/results.jpg')} // Replace with the actual path to your image
              style={[styles.image, styles.resultTwoImage]}
            />
            <View style={styles.markDetail}>
              <Text style={styles.markDetailText}>{gradeData.comment}</Text>
            </View>
          </View>
          <View style={[styles.gameResultTwoCard1, styles.gameResultTwoCard2]}>
            <View style={styles.gameResultScoreBoard}>
              <Text style={styles.gameResultScoreText}>STATISTICS</Text>
            </View>
            <View>
              {positionReady && (
                <FlatList
                  data={positionReady}
                  pagingEnabled
                  numColumns={1}
                  snapToAlignment="center"
                  renderItem={({item}) => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <Text style={{marginHorizontal: '2%'}}>
                          {item.topic}
                        </Text>
                        <Text style={{marginHorizontal: '2%'}}>
                          {item.recurring} out of {item.totalTopic}
                        </Text>
                        <Text style={{marginHorizontal: '2%'}}>
                          {Math.ceil((item.recurring / item.totalTopic) * 100)}%
                        </Text>
                      </View>
                    );
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />
              )}
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
                action={handleGoToReview}
              />
            </View>
            <View style={styles.containerButton2}>
              <SubmitBtn
                btnText={'Save'}
                width={90}
                borderRadius={20}
                color={'#2C72D2'}
                textColor={'#FFFFFF'}
                action={handleSaveInfo}
              />
            </View>
            <View style={styles.containerButton2}>
              <SubmitBtn
                btnText={'Share'}
                width={90}
                color={'#042046'}
                textColor={'#FFFFFF'}
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
