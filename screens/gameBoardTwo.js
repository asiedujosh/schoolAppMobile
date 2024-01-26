import {useState, useRef, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import styles from '../globalStyles/Styles';
import SubmitBtn from '../component/submitBtn';
import {GAMEOPTIONS, QUESTIONS} from '../constant/gameboardConstant';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import OutputQuestion from '../component/htmlOutput.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import Icon from 'react-native-vector-icons/FontAwesome';

const GameBoardTwo = ({navigation}) => {
  const {questions, questionInfo, correctAns, processQuizAttempt, quizAttempt} =
    useContext(QuestionApiData);

  const [noOfQuestions, setNoOfQuestions] = useState(10);
  const [timer, setTimer] = useState(null);
  const [showTimer, setShowTimer] = useState(timer);
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const possibleAns = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'none',
  ];
  const intervalIdRef = useRef(null);

  useEffect(() => {
    console.log(timer);
    if (timer) {
      console.log('We stepped in timer');
      if (currentQuestionNo + 1 >= questions.length) {
        return () => clearInterval(intervalIdRef.current);
      } else {
        console.log('we stepped out');
        intervalIdRef.current = setInterval(updateAndCheck, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalIdRef.current);
      }
    }
  }, [timer]);

  const updateAndCheck = () => {
    setTimer(prevTimer => {
      updateTimer();
      if (prevTimer <= 0) {
        console.log('Time is up!');
        handleChoosenAns(12);
        setTimer(questionInfo.timer);
        // You can perform actions or show alerts here
        clearInterval(intervalIdRef.current);
      } else {
        setShowTimer(prevTimer - 1);
        return prevTimer - 1;
      }
    });
  };

  const updateTimer = () => {
    console.log(showTimer);
  };

  const storeSolvedQuestions = (questionId, ans, userAns) => {
    processQuizAttempt(questionId, ans, userAns);
  };

  const handleChoosenAns = item => {
    let options = questions && questions[currentQuestionNo].options.split('**');
    const position = options.indexOf(item);
    let userAns = possibleAns[position];
    storeSolvedQuestions(
      questions[currentQuestionNo].id,
      questions[currentQuestionNo].answer,
      userAns,
    );

    if (currentQuestionNo + 1 == questions.length) {
      clearInterval(intervalIdRef.current);
      navigation.navigate('GameResult');
    } else {
      setCurrentQuestionNo(prev => prev + 1);
      setTimer(questionInfo.timer);
      console.log(`current question no ${currentQuestionNo}`);
      console.log(`total question no ${questions.length - 1}`);
    }
  };

  const handlePause = () => {
    navigation.navigate('Pause');
  };

  return (
    <KeyboardAvoidingContainer>
      <View
        style={[
          styles.quizOptionLead,
          styles.gameboardTwoContainer,
          styles.gameBoard,
        ]}>
        <View style={styles.firstView}>
          <Image
            source={require('../assets/img/questionboard.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.centeredOverlay}>
          <View style={styles.secondView}>
            <Text
              style={
                styles.overlayText
              }>{`Chemistry ${'\n'}Wassce ${'\n'}May/June 2022`}</Text>

            <Text style={[styles.overlayText, styles.overlaySubText]}>
              Question 12
            </Text>
          </View>
        </View>
        <View style={[styles.homeCard, styles.questionCard]}>
          <View style={{flex: 0.95}}>
            <ScrollView style={{flex: 1}}>
              <View>
                <Text style={styles.questionText}>{QUESTIONS[3].question}</Text>
              </View>
              <View style={styles.answerContainer}>
                <Pressable
                  onPress={() => {
                    handleChoosenAns(item);
                  }}
                  style={({pressed}) => [styles.optionItemContainer2]}>
                  <Text style={styles.optionItem2}>Answer One</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    handleChoosenAns(item);
                  }}
                  style={({pressed}) => [
                    styles.optionItemContainer2,
                    {backgroundColor: '#0797F8'},
                  ]}>
                  <Text style={styles.optionItem2}>Answer Two</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    handleChoosenAns(item);
                  }}
                  style={({pressed}) => [styles.optionItemContainer2]}>
                  <Text style={styles.optionItem2}>Answer Three</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    handleChoosenAns(item);
                  }}
                  style={({pressed}) => [styles.optionItemContainer2]}>
                  <Text style={styles.optionItem2}>Answer Four</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '5%',
            }}>
            <View style={styles.buttonContainer3}>
              <Pressable style={styles.buttonCircle}>
                <Icon name="chevron-left" size={10} color="#0347A1" />
              </Pressable>
              <Pressable style={styles.buttonCircle}>
                <Icon name="chevron-right" size={10} color="#0347A1" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default GameBoardTwo;
