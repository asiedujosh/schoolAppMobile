import {useState, useContext, useEffect} from 'react';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {Text, View, ScrollView, Pressable, FlatList} from 'react-native';
import LoadingBtn from '../component/loadingBtn.js';
import styles from '../globalStyles/Styles';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import {useRoute} from '@react-navigation/native';

const SubjectList = ({navigation}) => {
  const {
    questions,
    processGetQuestions,
    loadingQuestions,
    setLoadingQuestions,
    examsList,
    yearList,
    subjectList,
  } = useContext(QuestionApiData);

  const route = useRoute();
  const infoGathered = route.params?.data;

  useEffect(() => {
    if (questions) {
      if (questions.length > 0) {
        navigation.navigate('GameBoard');
      } else {
        if (loadingQuestions) {
          navigation.navigate('QuestionsNotAvailableTwo');
        }
      }
    }
  }, [questions]);

  const handleSubmitQuizOptions = item2 => {
    let examInfo = examsList.filter(item => item.id == infoGathered.examType);
    let yearInfo = yearList.filter(item => item.id == infoGathered.year);
    let subjectInfo = subjectList.filter(item => item.id == item2);

    let quizOptions = {
      quizType: examInfo.exam,
      year: yearInfo.year,
      subject: subjectInfo.subject,
      questionNos: '100',
      questionStyle: 'Straight',
    };
    setLoadingQuestions(true);
    processGetQuestions(quizOptions);
  };

  //Original Verison

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.quizOptionContainer}>
          <View
            style={[
              styles.dashboardHeadCard,
              styles.reviewCardTwo,
              styles.settingHeadCard,
            ]}>
            <View style={styles.dashboardHeadFAQ}>
              <Text style={[styles.dashboardHeadTitle]}>Subject</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {loadingQuestions && (
                <Text style={{color: '#fff', fontSize: 20}}>
                  Loading..........
                </Text>
              )}
            </View>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              <FlatList
                data={subjectList}
                pagingEnabled
                numColumns={1}
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate={'fast'}
                renderItem={({item}) => {
                  return (
                    <Pressable
                      style={[styles.analysisCard, {marginBottom: '5%'}]}
                      onPress={() => {
                        handleSubmitQuizOptions(item.id);
                      }}>
                      <View style={{marginBottom: '5%'}}>
                        <Text style={styles.analysisTableText}>
                          {item.subject}
                        </Text>
                      </View>
                    </Pressable>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default SubjectList;
