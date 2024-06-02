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
import AsciiOutput from './asciiHtml.js';
import AudioQuestion from '../component/audioQuestion.js';
import Icon from 'react-native-vector-icons/Feather';
import RenderOptionsContainer from '../component/renderOptionContainer.js';

const OralGameBoard = ({navigation}) => {
  const {
    oralQuestions,
    oralQuestionInfo,
    correctAns,
    processOralQuizAttempt,
    quizAttempt,
  } = useContext(QuestionApiData);
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
    try {
      console.log(timer);
      if (timer) {
        console.log('We stepped in timer');
        if (currentQuestionNo + 1 >= oralQuestions.length) {
          return () => clearInterval(intervalIdRef.current);
        } else {
          console.log('we stepped out');
          intervalIdRef.current = setInterval(updateAndCheck, 1000);

          // Clean up the interval on component unmount
          return () => clearInterval(intervalIdRef.current);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [timer]);

  const NOANSWER = 'errNoAns';

  const updateAndCheck = () => {
    try {
      setTimer(prevTimer => {
        updateTimer();
        if (prevTimer <= 0) {
          console.log('Time is up!');
          handleChoosenAns(12);
          setTimer(oralQuestionInfo.timer);
          // You can perform actions or show alerts here
          clearInterval(intervalIdRef.current);
        } else {
          setShowTimer(prevTimer - 1);
          return prevTimer - 1;
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateTimer = () => {
    console.log(showTimer);
  };

  const storeSolvedOralQuestions = (questionId, ans, userAns) => {
    processOralQuizAttempt(questionId, ans, userAns);
  };

  let highLightItem = item => {
    try {
      if (!choseAnsHighlight[currentQuestionNo]) {
        setChoseAnsHighlight([...choseAnsHighlight, item]);
      } else {
        const newHighlight = [...choseAnsHighlight];
        newHighlight.splice(currentQuestionNo, 1);
        newHighlight.splice(currentQuestionNo, 0, item);
        setChoseAnsHighlight(newHighlight);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChoosenAns = item => {
    highLightItem(item);
  };

  let processAns = () => {
    try {
      choseAnsHighlight.map(item => {
        if (item !== NOANSWER) {
          let options;
          if (
            oralQuestions[choseAnsHighlight.indexOf(item)].options !== '' &&
            oralQuestions[choseAnsHighlight.indexOf(item)].options !== null
          ) {
            options =
              oralQuestions[choseAnsHighlight.indexOf(item)].options.split(
                '**',
              );
          }

          let position = options.indexOf(item);
          let userAns = possibleAns[position];
          storeSolvedOralQuestions(
            oralQuestions[choseAnsHighlight.indexOf(item)].id,
            oralQuestions[choseAnsHighlight.indexOf(item)].answer,
            userAns,
          );
        } else {
          storeSolvedOralQuestions(
            oralQuestions[choseAnsHighlight.indexOf(item)].id,
            oralQuestions[choseAnsHighlight.indexOf(item)].answer,
            (userAns = 12),
          );
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleNext = () => {
    try {
      if (currentQuestionNo + 1 == oralQuestions.length) {
        processAns();
        navigation.navigate('OralGameResult');
      } else {
        if (!choseAnsHighlight[currentQuestionNo]) {
          setChoseAnsHighlight([...choseAnsHighlight, NOANSWER]);
        }
        setCurrentQuestionNo(prev => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePrev = () => {
    try {
      if (currentQuestionNo > 0) {
        setCurrentQuestionNo(prev => prev - 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
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
              oralQuestionInfo.subject
            } ${'\n'}${oralQuestionInfo.examsType.toUpperCase()} ${'\n'}${
              oralQuestionInfo.year
            }`}</Text>

            <Text style={[styles.overlayText, styles.overlaySubText]}>
              {`Question ${
                oralQuestions && oralQuestions[currentQuestionNo].questionNo
              }`}
            </Text>
          </View>
        </View>
        <View style={[styles.homeCard, styles.questionCard]}>
          <View style={{flex: 0.95}}>
            <ScrollView style={{flex: 1}}>
              <View style={styles.questionTextContainer}>
                {oralQuestions &&
                  oralQuestions[currentQuestionNo].question !== '' &&
                  oralQuestions[currentQuestionNo].question !== null && (
                    <AudioQuestion
                      tracks={
                        oralQuestions &&
                        oralQuestions[currentQuestionNo].audio_url
                      }
                    />
                  )}
              </View>
              <View style={styles.answerContainer}>
                <RenderOptionsContainer
                  optionType={[oralQuestions[currentQuestionNo].options]}
                  currentQuestion={currentQuestionNo}
                  highlight={handleChoosenAns}
                  ansHighLight={choseAnsHighlight}
                />
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
                style={({pressed}) => [
                  {backgroundColor: pressed ? 'lightblue' : '#EBEBEC'},
                  styles.buttonCircle,
                ]}
                onPress={() => {
                  handlePrev();
                }}>
                <Icon name="chevron-left" size={10} color="#0347A1" />
              </Pressable>
              <Pressable
                style={({pressed}) => [
                  {backgroundColor: pressed ? 'lightblue' : '#EBEBEC'},
                  styles.buttonCircle,
                ]}
                onPress={() => {
                  handleNext();
                }}>
                <Icon name="chevron-right" size={10} color="#0347A1" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OralGameBoard;
