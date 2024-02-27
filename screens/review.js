import {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import {Dimensions} from 'react-native';
import styles from '../globalStyles/Styles';
import {REVIEW} from '../constant/reviewConstant';
import filterAnswers from '../utils/filterAnswers';
import SelectField from '../component/selectField';
import ReviewOptionsContainer from '../component/reviewOptionContainer.js';
import SelectFieldCorrection from '../component/selectFieldCorrection';
import HomeBtn from '../component/homeBtn.js';
import {QUESTIONS, OPTIONS} from '../constant/gameboardConstant.js';
import SubmitBtn from '../component/submitBtn';
import OutputQuestion from '../component/htmlOutput.js';
import AsciiOutput from './asciiHtml.js';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const {width, height} = Dimensions.get('window');

const Review = ({navigation}) => {
  const {quizAttempt, correctAns, questions, questionInfo, review, setReview} =
    useContext(QuestionApiData);
  const [reviewOption, setReviewOption] = useState({
    reviewOption: REVIEW.selectOptions.options[0],
  });
  const [selectedValue, setSelectedValue] = useState('All');
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    console.log(selectedValue);
    setInfoData(filterAnswers(review, selectedValue));
  }, [selectedValue]);

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard');
  };

  let handleRetry = () => {
    console.log('We will handle retry');
  };

  let colorCheck = (one, answer, choseAnswer, item) => {
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
            {quizAttempt.quizInfo.subject.toUpperCase()}
          </Text>
          <Text style={styles.reviewCardHeadTitle}>
            {quizAttempt.quizInfo.year.toUpperCase()}
          </Text>
          <Text style={[styles.reviewCardHeadSubTitle, {color: '#fff'}]}>
            {correctAns} Out of {questions && questions.length}
          </Text>
        </View>
        <ScrollView style={{flex: 1}}>
          {infoData.length > 0 &&
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
            ))}
        </ScrollView>
        <View>
          <SubmitBtn
            btnText={'Retry'}
            width={width * 0.85}
            color={'#ffffff'}
            textColor={'#0347A1'}
            borderRadius={width * 0.15}
            topMargin={0.02 * height}
            action={() => {
              console.log('Will retry');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Review;
