import React, {useEffect, useState, useContext} from 'react';
import {Text, View, Image, Alert, FlatList} from 'react-native';
import styles from '../globalStyles/Styles';
import SubmitBtn from '../component/submitBtn';
import Share from 'react-native-share';
import files from '../assets/base64/base64Img.js';
import positionMap from '../utils/positionMap.js';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {RecordApiData} from '../contextApi/records/recordsContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
// import {FlatList} from 'react-native-gesture-handler';

const GameResult = ({navigation}) => {
  const {
    quizAttempt,
    correctAns,
    questionInfo,
    questions,
    review,
    setReview,
    topicList,
  } = useContext(QuestionApiData);
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
    try {
      (quizAttempt.userInfo = userProfile.username), console.log(quizAttempt);
      setReview(quizAttempt.solvedQuestions);
      handleGrade(questions.length, correctAns);
      setTopicEvaluation(quizAttempt.solvedQuestions);
      let data = quizAttempt.solvedQuestions.filter(
        item => item.userChoice.toLowerCase() == item.answer.toLowerCase(),
      );
      setAllCorrectTopicInQuestion(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      let newData = positionMap(
        allCorrectTopicInQuestion,
        topicEvaluation,
        topicList,
      );
      setPositionReady(newData);
    } catch (err) {
      console.log(err);
    }
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
    try {
      let data2 = {
        correctAns: correctAns,
        totalQuestions: questions.length,
        status: 'complete',
      };
      processSaveRecords(quizAttempt, data2);
    } catch (err) {
      console.log(err);
    }
  };

  const handleShareInfo = async () => {
    const shareOptions = {
      message: `I scored ${correctAns} Out of ${questions.length} on ${questionInfo.subject} ${questionInfo.examsType} ${questionInfo.year} on the nunya exam app`,
      url: files.logo,
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  let handleGrade = (noOfQuestions, marks) => {
    try {
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
    } catch (err) {
      console.log(err);
    }
  };

  let handleOnBtnAlert = () => {
    Alert.alert('Notice', `You have a grade of ${gradeData.comment}`, [
      {
        text: 'Ok',
        onPress: () => null,
        style: 'cancel',
      },
    ]);
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
              <Text style={styles.markDetailText} onPress={handleOnBtnAlert}>
                {gradeData.comment}
              </Text>
            </View>
          </View>
          <View style={[styles.gameResultTwoCard1, styles.gameResultTwoCard2]}>
            <View style={styles.gameResultScoreBoard}>
              <Text style={styles.gameResultScoreText}>STATISTICS</Text>
            </View>
            <View>
              {!positionReady && (
                <View>
                  <Text style={{color: '#000000'}}>No data available yet</Text>
                </View>
              )}
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
