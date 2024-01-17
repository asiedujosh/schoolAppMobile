import {useState, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import styles from '../globalStyles/Styles';
import {GAMEOPTIONS, QUESTIONS} from '../constant/gameboardConstant';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import OutputQuestion from '../component/htmlOutput.js';

import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const GameBoard = ({navigation}) => {
  const {questions, questionInfo, correctAns, processQuizAttempt, quizAttempt} =
    useContext(QuestionApiData);
  const [noOfQuestions, setNoOfQuestions] = useState(10);
  const [dummy, setDummy] = useState();
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
  ];

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
      navigation.navigate('GameResult');
    } else {
      setCurrentQuestionNo(prev => prev + 1);
      console.log(`current question no ${currentQuestionNo}`);
      console.log(`total question no ${questions.length - 1}`);
    }
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={[styles.quizOptionLead, styles.gameBoard]}>
        <View style={styles.quizOptionContainer}>
          <View style={styles.scoreTimerBoard}>
            <View style={styles.timerContainer}>
              <Text style={styles.timerScoreText}>2 Sec</Text>
            </View>
            <View style={styles.quesNoContainer}>
              <Text style={styles.timerScoreText}>
                {currentQuestionNo} / {noOfQuestions}
              </Text>
            </View>
          </View>
          <View style={styles.gameOptionsContainer}>
            <Text style={styles.subject}>{questionInfo.subject}</Text>
            <Text style={styles.quizType}>{questionInfo.year}</Text>
            <Text style={styles.quizQues}>
              {`Question No ${
                questions && questions[currentQuestionNo].questionNo
              }`}
            </Text>
          </View>
          <View style={styles.questionContainerBoard}>
            <ScrollView style={{flex: 1}}>
              <View style={styles.question}>
                <OutputQuestion
                  data={questions && questions[currentQuestionNo].question}
                />
              </View>
            </ScrollView>
          </View>
          <View style={styles.optionContainer}>
            <ScrollView style={{flex: 1}}>
              {questions &&
                questions[currentQuestionNo].options
                  .split('**')
                  .map((item, index) => (
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
                  ))}
            </ScrollView>
          </View>
          <View style={{flex: 0.5}}>
            <Pressable>
              <Text>Pause</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default GameBoard;
