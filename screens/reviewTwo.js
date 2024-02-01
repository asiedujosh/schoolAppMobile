import {useState, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import {Dimensions} from 'react-native';
import styles from '../globalStyles/Styles';
import {REVIEW} from '../constant/reviewConstant';
import SelectField from '../component/selectField';
import HomeBtn from '../component/homeBtn.js';
import {QUESTIONS, OPTIONS} from '../constant/gameboardConstant.js';
import SubmitBtn from '../component/submitBtn';
import OutputQuestion from '../component/htmlOutput.js';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const {width, height} = Dimensions.get('window');

const ReviewTwo = ({navigation}) => {
  const {quizAttempt, correctAns, questions, questionInfo, review, setReview} =
    useContext(QuestionApiData);
  const [reviewOption, setReviewOption] = useState({
    reviewOption: REVIEW.selectOptions.options[0],
  });
  const [selectedValue, setSelectedValue] = useState('');

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard');
  };

  let handleRetry = () => {
    console.log('We will handle retry');
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.quizOptionContainer}>
          <View style={[styles.dashboardHeadCard, styles.reviewCardTwo]}>
            <View style={[styles.reviewSearchContainer]}>
              <View style={styles.searchWrapper}>
                <SelectField
                  title={'Home'}
                  field={'Home'}
                  top={'0%'}
                  option={['All', 'Correct', 'Wrongs']}
                  change={[
                    selectedValue,
                    setSelectedValue,
                    reviewOption,
                    setReviewOption,
                  ]}
                />
              </View>
              <View style={styles.homeBtnWrapper}>
                <HomeBtn />
              </View>
            </View>
          </View>
          <View style={styles.reviewCardHeadContainer}>
            <Text style={styles.reviewCardHeadTitle}>General Science</Text>
            <Text style={styles.reviewCardHeadTitle}>May/June 2022</Text>
            <Text style={[styles.reviewCardHeadSubTitle, {color: '#fff'}]}>
              7 Out of 10
            </Text>
          </View>
          <View style={{flex: 4}}>
            <ScrollView style={{flex: 3}}>
              <View style={styles.reviewQuestionCard}>
                <Text style={styles.reviewCardHeadSubTitle}>Question 12</Text>
                <Text style={styles.reviewQuestion}>
                  {QUESTIONS[3].question}
                </Text>
                <View style={styles.reviewAnsContainer}>
                  <Text
                    style={[
                      styles.reviewCardHeadSubTitle,
                      styles.reviewAnsText,
                    ]}>
                    Chose: C
                  </Text>
                  <Text
                    style={[
                      styles.reviewCardHeadSubTitle,
                      styles.reviewAnsText,
                    ]}>
                    Answer: B
                  </Text>
                </View>
                <View style={styles.reviewOptionsContainer}>
                  {QUESTIONS[3].options.split('**').map((item, index) => (
                    <View style={[styles.reviewOptionsItemContainer]}>
                      <Text style={styles.reviewOptionText}>{item}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </ScrollView>
          </View>
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
    </KeyboardAvoidingContainer>
  );
};

export default ReviewTwo;
