import {useState, useContext, useEffect} from 'react';
import {Text, View, ScrollView, Pressable, FlatList} from 'react-native';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import SubmitBtn from '../component/submitBtn';
import LoadingBtn from '../component/loadingBtn.js';
import styles from '../globalStyles/Styles';
import {STATUSOPTION} from '../constant/reviewConstant';
import OutputQuestion from '../component/htmlOutput.js';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {RecordApiData} from '../contextApi/records/recordsContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const RecordView = ({navigation}) => {
  const {
    processGetQuestions,
    questions,
    loadingQuestions,
    setLoadingQuestions,
  } = useContext(QuestionApiData);
  const {
    processGetRecordReview,
    savedRecords,
    recordReviewMark,
    recordReviewInfo,
    recordReviewDetail,
    reviewId,
  } = useContext(RecordApiData);

  useEffect(() => {
    if (questions) {
      if (questions.length > 0) {
        navigation.navigate('GameBoard');
      } else {
        navigation.navigate('QuestionsNotAvailable');
      }
    }
  }, [questions]);

  useEffect(() => {
    processGetRecordReview(reviewId);
  }, []);

  let handleRetry = () => {
    setLoadingQuestions(true);
    let questionsData = {
      quizType: recordReviewInfo && recordReviewInfo[0].examsType,
      subject: recordReviewInfo && recordReviewInfo[0].subject,
      year: recordReviewInfo && recordReviewInfo[0].year,
      questionNos: recordReviewMark && recordReviewMark[0].noOfQuestions,
      questionStyle: 'Straight',
    };
    processGetQuestions(questionsData);
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.gameResultContainer}>
          <View style={styles.topicContainer}>
            <Text style={styles.subTopicTitle}>
              {recordReviewInfo.length > 0 &&
                recordReviewInfo[0].examsType.toUpperCase()}
            </Text>
            <Text style={styles.topicTitle}>
              {recordReviewInfo.length > 0 && recordReviewInfo[0].subject}
            </Text>
            <Text style={styles.subTopicTitle}>
              {recordReviewInfo.length > 0 && recordReviewInfo[0].year}
            </Text>
            <View style={styles.markRecordData}>
              <Text style={styles.mark}>
                {recordReviewMark && recordReviewMark[0].correctMark}
              </Text>
              <Text style={styles.middleMark}>Out of</Text>
              <Text style={styles.mark}>
                {recordReviewMark && recordReviewMark[0].noOfQuestions}
              </Text>
            </View>
          </View>
          <View style={styles.statusContainer}>
            <Text>
              {recordReviewInfo.length > 0 && recordReviewInfo[0].status}
            </Text>
            <View>
              {loadingQuestions ? (
                <LoadingBtn />
              ) : (
                <SubmitBtn
                  btnText={'Retry'}
                  width={300}
                  borderRadius={30}
                  topMargin={'5%'}
                  action={handleRetry}
                />
              )}
            </View>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              {recordReviewDetail && (
                <FlatList
                  data={recordReviewDetail}
                  keyExtractor={item => item.id}
                  pagingEnabled
                  snapToAlignment="center"
                  scrollEventThrottle={16}
                  decelerationRate={'fast'}
                  renderItem={({item}) => {
                    return (
                      <View style={styles.questionContainer}>
                        <Text style={styles.questionTopicTitle}>3</Text>
                        <Text style={styles.questionTopicTitleSub}>
                          Question {item.questionNo}
                        </Text>
                        <View style={styles.reviewQuestionContainer}>
                          <OutputQuestion
                            data={item.question}
                            color={'black'}
                            fontSize={20}
                          />
                        </View>
                        <View style={styles.reviewAnsContainer}>
                          <View style={styles.reviewAns}>
                            <Text style={styles.reviewAnsText}>Choose: A</Text>
                          </View>
                          <View style={styles.reviewAns}>
                            <Text style={styles.reviewAnsText}>Answer: B</Text>
                          </View>
                        </View>
                        <View style={styles.reviewOptionsContainer}>
                          {item.options.split('**').map((item, index) => (
                            <View
                              style={styles.reviewOptionsItemContainer}
                              key={item}>
                              <Text style={styles.reviewOptionText}>
                                {item}
                              </Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    );
                  }}
                />
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default RecordView;
