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

const GameBoard = ({navigation}) => {
  const {questions, questionInfo, correctAns, processQuizAttempt, quizAttempt} =
    useContext(QuestionApiData);
  const [choseAnsHighlight, setChoseAnsHighlight] = useState([]);
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

  const NOANSWER = 'errNoAns';

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

  let highLightItem = item => {
    if (!choseAnsHighlight[currentQuestionNo]) {
      setChoseAnsHighlight([...choseAnsHighlight, item]);
    } else {
      const newHighlight = [...choseAnsHighlight];
      newHighlight.splice(currentQuestionNo, 1);
      newHighlight.splice(currentQuestionNo, 0, item);
      setChoseAnsHighlight(newHighlight);
    }
  };

  const handleChoosenAns = item => {
    highLightItem(item);
  };

  let processAns = () => {
    choseAnsHighlight.map(item => {
      if (item !== NOANSWER) {
        let options =
          questions[choseAnsHighlight.indexOf(item)].options.split('**');
        let position = options.indexOf(item);
        let userAns = possibleAns[position];
        storeSolvedQuestions(
          questions[choseAnsHighlight.indexOf(item)].id,
          questions[choseAnsHighlight.indexOf(item)].answer,
          userAns,
        );
      } else {
        storeSolvedQuestions(
          questions[choseAnsHighlight.indexOf(item)].id,
          questions[choseAnsHighlight.indexOf(item)].answer,
          (userAns = 12),
        );
      }
    });
  };

  const handleNext = () => {
    if (currentQuestionNo + 1 == questions.length) {
      processAns();
      navigation.navigate('GameResult');
    } else {
      if (!choseAnsHighlight[currentQuestionNo]) {
        setChoseAnsHighlight([...choseAnsHighlight, NOANSWER]);
      }
      setCurrentQuestionNo(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionNo > 0) {
      setCurrentQuestionNo(prev => prev - 1);
    }
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
            style={styles.image2}
          />
        </View>
        <View style={styles.centeredOverlay}>
          <View style={styles.secondView}>
            <Text style={styles.overlayText}>{`${
              questionInfo.subject
            } ${'\n'}${questionInfo.examsType.toUpperCase()} ${'\n'}${
              questionInfo.year
            }`}</Text>

            <Text style={[styles.overlayText, styles.overlaySubText]}>
              {`Question ${
                questions && questions[currentQuestionNo].questionNo
              }`}
            </Text>
          </View>
        </View>
        <View style={[styles.homeCard, styles.questionCard]}>
          <View style={{flex: 0.95}}>
            <ScrollView style={{flex: 1}}>
              <View>
                <OutputQuestion
                  data={questions && questions[currentQuestionNo].question}
                  color={'white'}
                  fontSize={21}
                />
              </View>
              <View style={styles.answerContainer}>
                {questions &&
                  questions[currentQuestionNo].options
                    .split('**')
                    .map((item, index) => (
                      <Pressable
                        onPress={() => {
                          handleChoosenAns(item);
                        }}
                        style={({pressed}) => [
                          styles.optionItemContainer2,
                          {
                            backgroundColor:
                              item == choseAnsHighlight[currentQuestionNo]
                                ? '#0797F8'
                                : '#0347A1',
                          },
                        ]}>
                        <Text style={styles.optionItem2}>{item}</Text>
                      </Pressable>
                    ))}
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.buttonContainer3}>
              <Pressable
                style={styles.buttonCircle}
                onPress={() => {
                  handlePrev();
                }}>
                <Icon name="chevron-left" size={10} color="#0347A1" />
              </Pressable>
              <Pressable
                style={styles.buttonCircle}
                onPress={() => {
                  handleNext();
                }}>
                <Icon name="chevron-right" size={10} color="#0347A1" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default GameBoard;
