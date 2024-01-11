import {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import styles from '../globalStyles/Styles';
import {GAMEOPTIONS, QUESTIONS} from '../constant/gameboardConstant';

import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const GameBoard = ({navigation}) => {
  const [noOfQuestions, setNoOfQuestions] = useState(10);
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const [solvedQuestions, setSolvedQuestions] = useState([]);
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

  const storeSolvedQuestions = (questionId, topic, ans, userAns) => {
    let solvedQuest = {
      questionId: questionId,
      topic: topic,
      ans: ans,
      userAns: userAns,
    };
    setSolvedQuestions([...solvedQuestions, solvedQuest]);
  };

  const handleChoosenAns = item => {
    let options = QUESTIONS[currentQuestionNo].options.split('**');
    const position = options.indexOf(item);
    let userAns = possibleAns[position];
    storeSolvedQuestions(
      QUESTIONS[currentQuestionNo].id,
      QUESTIONS[currentQuestionNo].topic,
      QUESTIONS[currentQuestionNo].ans,
      userAns,
    );

    let next = currentQuestionNo + 1;

    if (next > QUESTIONS.length) {
      navigation.navigate('Result');
    } else {
      setCurrentQuestionNo(next);
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
            <Text style={styles.subject}>Chemistry</Text>
            <Text style={styles.quizType}>WASSCE MAY/JUNE 2022</Text>
            <Text style={styles.quizQues}>Question 12</Text>
          </View>
          <View style={styles.questionContainerBoard}>
            <ScrollView style={{flex: 1}}>
              <Text style={styles.question}>
                {QUESTIONS[currentQuestionNo].question}
              </Text>
              <View style={styles.questionImg}>
                <Text>Image</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.optionContainer}>
            <ScrollView style={{flex: 1}}>
              {QUESTIONS[currentQuestionNo].options
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
            <Text></Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default GameBoard;
