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
import AudioQuestion from '../component/audioQuestion.js';
import {RecordApiData} from '../contextApi/records/recordsContextApi.js';

const OralRecordView = ({navigation}) => {
  const {processGetOralQuestions, oralQuestions, setLoadingQuestions} =
    useContext(QuestionApiData);
  const {
    processGetOralRecordReview,
    oralRecordReviewMark,
    oralRecordReviewInfo,
    oralRecordReviewDetail,
    oralReviewId,
  } = useContext(RecordApiData);
  const [reviewOption, setReviewOption] = useState({
    reviewOption: REVIEW.selectOptions.options[0],
  });

  const [selectedValue, setSelectedValue] = useState('All');
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    processGetOralRecordReview(oralReviewId);
    setInfoData(filterAnswers(oralRecordReviewDetail, selectedValue));
  }, []);

  useEffect(() => {
    // console.log(selectedValue);
    setInfoData(filterAnswers(oralRecordReviewDetail, selectedValue));
  }, [selectedValue]);

  useEffect(() => {
    if (oralQuestions) {
      if (oralQuestions.length > 0) {
        navigation.navigate('OralGameBoard');
      } else {
        navigation.navigate('QuestionsNotAvailable');
      }
    }
  }, [oralQuestions]);

  let handleRetry = () => {
    setLoadingQuestions(true);
    let questionsData = {
      quizType: oralRecordReviewInfo && oralRecordReviewInfo[0].examsType,
      subject: oralRecordReviewInfo && oralRecordReviewInfo[0].subject,
      year: oralRecordReviewInfo && oralRecordReviewInfo[0].year,
      questionNos:
        oralRecordReviewMark && oralRecordReviewMark[0].noOfQuestions,
      questionStyle: 'Straight',
    };
    processGetOralQuestions(questionsData);
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
            {oralRecordReviewInfo.length > 0 &&
              oralRecordReviewInfo[0].examsType.toUpperCase()}{' '}
            {oralRecordReviewInfo.length > 0 && oralRecordReviewInfo[0].subject}
          </Text>
          <Text style={styles.reviewCardHeadTitle}>
            {oralRecordReviewInfo.length > 0 && oralRecordReviewInfo[0].year}
          </Text>
          <Text style={[styles.reviewCardHeadSubTitle, {color: '#fff'}]}>
            {oralRecordReviewMark && oralRecordReviewMark[0].correctMark} Out of{' '}
            {oralRecordReviewMark && oralRecordReviewMark[0].noOfQuestions}
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
                  <AudioQuestion tracks={item.question.audio_url} />
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
          ) : filterAnswers(oralRecordReviewDetail, selectedValue).length ==
            0 ? (
            <View className="" style={{marginTop: '20%'}}>
              <Text style={{color: '#ffffff', fontSize: 20}}>No Data</Text>
            </View>
          ) : (
            filterAnswers(oralRecordReviewDetail, selectedValue).map(item => (
              <View style={styles.reviewQuestionCard}>
                <Text style={styles.reviewCardHeadSubTitle}>
                  Question {item.questionNo}
                </Text>

                {item.question !== '' && item.question !== null && (
                  <AudioQuestion tracks={item.question.audio_url} />
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

export default OralRecordView;
