import {useState, useRef, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import styles from '../globalStyles/Styles';
import {Dimensions} from 'react-native';
import SubmitBtn from '../component/submitBtn';
import {
  GAMEOPTIONS,
  QUESTIONS,
  QUESTIONSIMAGE,
} from '../constant/gameboardConstant';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import OutputQuestion from '../component/htmlOutput.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

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
    let options;
    if (
      questions[currentQuestionNo].options !== '' &&
      questions[currentQuestionNo].options !== null
    ) {
      options = questions && questions[currentQuestionNo].options.split('**');
    }

    if (
      questions[currentQuestionNo].imageOptions !== '' &&
      questions[currentQuestionNo].imageOptions !== null
    ) {
      options =
        questions && questions[currentQuestionNo].imageOptions.split('**');
    }

    if (
      questions[currentQuestionNo].optionsWithEquation !== '' &&
      questions[currentQuestionNo].optionsWithEquation !== null
    ) {
      options =
        questions &&
        questions[currentQuestionNo].optionsWithEquation.split('**');
    }

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
              {QUESTIONSIMAGE.map(item => (
                <>
                  <View>
                    <Text style={styles.questionText}>{item.question}</Text>
                  </View>
                  {item.options == '' ? (
                    <View style={[styles.answerContainer]}>
                      <FlatList
                        data={item.imageOptions.split('**')}
                        pagingEnabled
                        numColumns={2}
                        snapToAlignment="center"
                        scrollEventThrottle={16}
                        decelerationRate={'fast'}
                        renderItem={({item}) => {
                          return (
                            <Pressable
                              onPress={() => {
                                handleChoosenAns(item);
                              }}
                              style={({pressed}) => [
                                {
                                  backgroundColor: pressed
                                    ? 'lightblue'
                                    : '#efefef',
                                },
                                {
                                  borderRadius: width * 0.05,
                                  marginTop: 0.02 * height,
                                  marginHorizontal: '2%',
                                },
                              ]}>
                              <View
                                style={[
                                  styles.dashboardCard,
                                  {width: width * 0.4, height: width * 0.4},
                                ]}>
                                <Image
                                  source={{uri: `${item}`}} // Replace with the actual path to your image
                                  style={[
                                    styles.dashboardCardImage,
                                    {resizeMode: 'stretch'},
                                  ]}
                                />
                              </View>
                            </Pressable>
                          );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                      />
                    </View>
                  ) : (
                    item.options.split('**').map((item, index) => (
                      <Pressable
                        onPress={() => {
                          handleChoosenAns(item);
                        }}
                        style={({pressed}) => [
                          styles.optionItemContainer,
                          {backgroundColor: pressed ? '#3A0936' : '#ffffff'},
                        ]}>
                        <Text style={styles.optionItem}>{item}</Text>
                      </Pressable>
                    ))
                  )}
                </>
              ))}
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
