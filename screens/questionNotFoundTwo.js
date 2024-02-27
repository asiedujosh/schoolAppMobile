import {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import {Dimensions} from 'react-native';
import SubmitBtn from '../component/submitBtn';
import styles from '../globalStyles/Styles';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const {width, height} = Dimensions.get('window');

const QuestionsNotAvailableTwo = ({navigation}) => {
  const {setLoadingQuestions} = useContext(QuestionApiData);

  useEffect(() => {
    setLoadingQuestions(false);
  }, []);

  const handleTryAgain = () => {
    setLoadingQuestions(false);
    navigation.navigate('Dashboard');
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={[styles.quizOptionLead, styles.gameBoard]}>
        <View style={styles.quizOptionContainer}>
          <View style={styles.gameOptionsContainer}>
            <Text style={styles.questionNotAvailable}>
              Questions Not Available
            </Text>
            <View style={styles.questionNotAvailImgContainer}>
              <View style={styles.resultImageContainer}>
                <Image
                  source={require('../assets/img/confusedEmoji.jpg')}
                  style={styles.resultImage}
                />
              </View>
            </View>
          </View>
          <View style={{flex: 0.5}}>
            <SubmitBtn
              btnText={'Try Again'}
              width={width * 0.85}
              color={'#ffffff'}
              textColor={'#0347A1'}
              borderRadius={width * 0.15}
              topMargin={'5%'}
              action={handleTryAgain}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default QuestionsNotAvailableTwo;
