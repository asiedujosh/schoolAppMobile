import {useState, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import styles from '../globalStyles/Styles';
import {REVIEW} from '../constant/reviewConstant';
import SelectField from '../component/selectField';
import SubmitBtn from '../component/submitBtn';
import OutputQuestion from '../component/htmlOutput.js';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const Review = ({navigation}) => {
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
        <View style={styles.gameResultContainer}>
          <View style={styles.reviewSearchContainer}>
            <View style={styles.searchWrapper}>
              <SelectField
                title={REVIEW.selectOptions.label}
                field={REVIEW.selectOptions.name}
                top={'0%'}
                option={REVIEW.selectOptions.options}
                change={[
                  selectedValue,
                  setSelectedValue,
                  reviewOption,
                  setReviewOption,
                ]}
              />
            </View>
            <View style={styles.homeBtnWrapper}>
              <SubmitBtn
                btnText={'Home'}
                width={100}
                borderRadius={30}
                topMargin={'20%'}
                action={handleHomeBtn}
              />
            </View>
          </View>
          <View style={styles.topicContainer}>
            <Text style={styles.topicTitle}>
              {quizAttempt.quizInfo.subject.toUpperCase()}
            </Text>
            <Text style={styles.subTopicTitle}>
              {quizAttempt.quizInfo.year.toUpperCase()}
            </Text>
            <View style={styles.markRecordData}>
              <Text style={styles.mark}>{correctAns}</Text>
              <Text style={styles.middleMark}>Out of</Text>
              <Text style={styles.mark}>{questions.length}</Text>
            </View>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              {review.map(item => (
                <View style={styles.questionContainer}>
                  <Text style={styles.questionTopicTitle}>{item.topicId}</Text>
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
                      <Text style={styles.reviewAnsText}>
                        Choose: {item.userChoice.toUpperCase()}
                      </Text>
                    </View>
                    <View style={styles.reviewAns}>
                      <Text style={styles.reviewAnsText}>
                        Answer: {item.answer.toUpperCase()}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.reviewOptionsContainer}>
                    {item.options.split('**').map((item, index) => (
                      <View style={styles.reviewOptionsItemContainer}>
                        <Text style={styles.reviewOptionText}>{item}</Text>
                      </View>
                    ))}
                  </View>
                  <View style={styles.markContainer}>
                    {item.userChoice.toUpperCase() ===
                    item.answer.toUpperCase() ? (
                      <View style={styles.correctContainer}>
                        <Text style={styles.markText}>Correct</Text>
                      </View>
                    ) : (
                      <View style={styles.wrongContainer}>
                        <Text style={styles.markText}>Wrong</Text>
                      </View>
                    )}
                  </View>
                </View>
              ))}

              <SubmitBtn
                btnText={'Retry'}
                width={300}
                borderRadius={30}
                topMargin={'5%'}
                action={handleRetry}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default Review;
