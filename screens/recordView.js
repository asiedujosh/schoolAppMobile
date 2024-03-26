import {useState, useContext, useEffect} from 'react';
import {Text, View, ScrollView, Pressable, FlatList, Alert} from 'react-native';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import ReviewOptionsContainer from '../component/reviewOptionContainer.js';
import {REVIEW} from '../constant/reviewConstant';
import filterAnswers from '../utils/filterAnswers';
import HomeBtn from '../component/homeBtn.js';
import SelectFieldCorrection from '../component/selectFieldCorrection';
import {OPTIONS} from '../constant/gameboardConstant.js';
import styles from '../globalStyles/Styles';
import OutputQuestion from '../component/htmlOutput.js';
import AsciiOutput from './asciiHtml.js';
import {RecordApiData} from '../contextApi/records/recordsContextApi.js';

const RecordView = ({navigation}) => {
  const {processGetQuestions, questions, setLoadingQuestions} =
    useContext(QuestionApiData);
  const {
    processGetRecordReview,
    recordReviewMark,
    recordReviewInfo,
    recordReviewDetail,
    reviewId,
  } = useContext(RecordApiData);
  const [reviewOption, setReviewOption] = useState({
    reviewOption: REVIEW.selectOptions.options[0],
  });

  const [selectedValue, setSelectedValue] = useState('All');
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    processGetRecordReview(reviewId);
    setInfoData(filterAnswers(recordReviewDetail, selectedValue));
  }, []);

  useEffect(() => {
    console.log(selectedValue);
    setInfoData(filterAnswers(recordReviewDetail, selectedValue));
  }, [selectedValue]);

  useEffect(() => {
    if (questions) {
      if (questions.length > 0) {
        navigation.navigate('GameBoard');
      } else {
        navigation.navigate('QuestionsNotAvailable');
      }
    }
  }, [questions]);

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

  let colorCheck = (one, answer, choseAnswer, item) => {
    try {
      let results = '#0347A1';

      let optionData = one.split('**');

      let positionItem = optionData && optionData.indexOf(item);
      let getOptionRep = OPTIONS[positionItem];

      if (getOptionRep.toLowerCase() === answer.toLowerCase()) {
        results = '#007E01';
      } else if (getOptionRep.toLowerCase() === choseAnswer.toLowerCase()) {
        results = '#CF0707';
      } else {
        results = '#0347A1';
      }

      return results;
    } catch (err) {
      console.log(err);
    }
  };

  const handleCompleteBtn = () => {
    Alert.alert('Notice', 'Records show completed works', [
      {
        text: 'Ok',
        onPress: () => null,
        style: 'cancel',
      },
    ]);
  };

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={{flex: 1}}>
      <View style={[styles.reviewCardTwo, styles.reviewCardThree]}>
        <View style={[styles.reviewSearchContainerTwo]}>
          <View style={styles.searchWrapper}>
            <SelectFieldCorrection
              top={'0%'}
              option={['All', 'Correct', 'Wrongs']}
              change={[selectedValue, setSelectedValue]}
            />
          </View>
          <View style={styles.homeBtnWrapper}>
            <HomeBtn handleHome={handleHomeBtn} />
          </View>
        </View>

        <View style={styles.reviewCardHeadContainer}>
          <Text style={styles.reviewCardHeadTitle}>
            {recordReviewInfo.length > 0 &&
              recordReviewInfo[0].examsType.toUpperCase()}{' '}
            {recordReviewInfo.length > 0 && recordReviewInfo[0].subject}
          </Text>
          <Text style={styles.reviewCardHeadTitle}>
            {recordReviewInfo.length > 0 && recordReviewInfo[0].year}
          </Text>
          <Text style={[styles.reviewCardHeadSubTitle, {color: '#fff'}]}>
            {recordReviewMark && recordReviewMark[0].correctMark} Out of{' '}
            {recordReviewMark && recordReviewMark[0].noOfQuestions}
          </Text>
        </View>

        <View style={styles.recordStatusBarContainer}>
          <View style={styles.completeBtn}>
            <Text style={styles.recordBtnText} onPress={handleCompleteBtn}>
              Complete
            </Text>
          </View>
          <Pressable style={styles.retryBtn} onPress={handleRetry}>
            <Text style={styles.recordBtnText}>Retry</Text>
          </Pressable>
        </View>

        <ScrollView style={{flex: 1}}>
          {infoData.length > 0 ? (
            infoData.map(item => (
              <View style={styles.reviewQuestionCard}>
                <Text style={styles.reviewCardHeadSubTitle}>
                  Question {item.questionNo}
                </Text>

                {item.question !== '' && item.question !== null && (
                  <OutputQuestion
                    data={item.question}
                    color={'black'}
                    fontSize={20}
                  />
                )}

                {item.questionEquation !== '' &&
                  item.questionEquation !== null && (
                    <AsciiOutput data={item.questionEquation} />
                  )}

                <View style={styles.reviewAnsContainer}>
                  <Text
                    style={[
                      styles.reviewCardHeadSubTitle,
                      styles.reviewAnsText,
                    ]}>
                    Chose: {item.userChoice.toUpperCase()}
                  </Text>
                  <Text
                    style={[
                      styles.reviewCardHeadSubTitle,
                      styles.reviewAnsText,
                    ]}>
                    Answer: {item.answer.toUpperCase()}
                  </Text>
                </View>
                <View style={styles.reviewOptionsContainer}>
                  {
                    <ReviewOptionsContainer
                      optionType={[
                        item.options,
                        item.imageOptions,
                        item.optionsWithEquation,
                      ]}
                      checkColor={colorCheck}
                      dataInfo={[item.answer, item.userChoice]}
                    />
                  }
                </View>
              </View>
            ))
          ) : filterAnswers(recordReviewDetail, selectedValue).length == 0 ? (
            <View className="" style={{marginTop: '20%'}}>
              <Text style={{color: '#ffffff', fontSize: 20}}>No Data</Text>
            </View>
          ) : (
            filterAnswers(recordReviewDetail, selectedValue).map(item => (
              <View style={styles.reviewQuestionCard}>
                <Text style={styles.reviewCardHeadSubTitle}>
                  Question {item.questionNo}
                </Text>

                {item.question !== '' && item.question !== null && (
                  <OutputQuestion
                    data={item.question}
                    color={'black'}
                    fontSize={20}
                  />
                )}

                {item.questionEquation !== '' &&
                  item.questionEquation !== null && (
                    <AsciiOutput data={item.questionEquation} />
                  )}

                <View style={styles.reviewAnsContainer}>
                  <Text
                    style={[
                      styles.reviewCardHeadSubTitle,
                      styles.reviewAnsText,
                    ]}>
                    Chose: {item.userChoice.toUpperCase()}
                  </Text>
                  <Text
                    style={[
                      styles.reviewCardHeadSubTitle,
                      styles.reviewAnsText,
                    ]}>
                    Answer: {item.answer.toUpperCase()}
                  </Text>
                </View>
                <View style={styles.reviewOptionsContainer}>
                  {
                    <ReviewOptionsContainer
                      optionType={[
                        item.options,
                        item.imageOptions,
                        item.optionsWithEquation,
                      ]}
                      checkColor={colorCheck}
                      dataInfo={[item.answer, item.userChoice]}
                    />
                  }
                </View>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default RecordView;
