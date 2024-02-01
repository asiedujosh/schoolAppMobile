import {useState, useRef, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ImageBackground,
} from 'react-native';
import styles from '../globalStyles/Styles';
import SubmitBtn from '../component/submitBtn';
import SelectField from '../component/selectField';
import {GAMEOPTIONS, QUESTIONS} from '../constant/gameboardConstant';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import OutputQuestion from '../component/htmlOutput.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeBtn from '../component/homeBtn.js';

const RecordTwo = ({navigation}) => {
  const {questions, questionInfo, correctAns, processQuizAttempt, quizAttempt} =
    useContext(QuestionApiData);
  const [selectedValue, setSelectedValue] = useState('');
  const [reviewOption, setReviewOption] = useState({
    reviewOption: 'All',
  });

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <ImageBackground
      source={require('../assets/img/record.jpg')} // Replace with your image path
      style={styles.recordBackgroundImage}>
      <View style={styles.recordOverlay}>
        <View style={[styles.dashboardHeadCard, styles.recordCardTwo]}>
          <View style={styles.reviewSearchContainer}>
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
        <View style={[styles.recordBody]}>
          <ScrollView style={{flex: 3}}>
            <View style={styles.recordCardContainer}>
              <Pressable
                style={styles.viewRecordCard}
                onPress={() => {
                  console.log('We are working');
                  //   goToRecordReview(item.quizId);
                }}>
                <View>
                  <View style={styles.recordCardTextContainer}>
                    <View style={styles.recordInfoCard}>
                      <Text style={styles.recordInfoTextTitle}>BECE</Text>
                      <Text style={styles.recordInfoTextTitle}>
                        May/June 2022
                      </Text>
                      <Text style={styles.recordInfoText}>2024 / 01 / 22</Text>
                    </View>
                    <View style={{marginTop: '5%'}}>
                      <Text style={styles.recordInfoTextTitle}>SCORE</Text>
                      <Text style={styles.recordInfoText}>5 Out of 7</Text>
                    </View>
                    <View style={{marginTop: '7%'}}>
                      <View style={styles.recordCardBtn}>
                        <Text style={styles.recordCardBtnText}>Complete</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RecordTwo;
