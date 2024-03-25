import {useState, useContext, useEffect} from 'react';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {StoreApiData} from '../contextApi/store/storeContextApi';
import HomeBtn from '../component/homeBtn.js';
import {Text, View, ScrollView, Pressable, FlatList} from 'react-native';
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
  const {purchases, freeProducts} = useContext(StoreApiData);

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

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard');
  };

  let handleNotPurchased = () => {
    setLoadingQuestions(false);
    navigation.navigate('NotPurchased');
  };

  const handleSubmitQuizOptions = item2 => {
    try {
      setLoadingQuestions(true);
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

      let entryData = {
        examId: infoGathered.examType,
        yearId: infoGathered.year,
        subjectId: item2,
      };

      let checkPurchase = purchases.filter(
        item =>
          item.examId == entryData.examId &&
          item.yearId == entryData.yearId &&
          item.subjectId == entryData.subjectId,
      );
      let checkFree = freeProducts.filter(
        item =>
          item.examId == entryData.examId &&
          item.yearId == entryData.yearId &&
          item.subjectId == entryData.subjectId,
      );

      checkPurchase.length == 0 && checkFree.length == 0
        ? handleNotPurchased()
        : processGetQuestions(quizOptions);
    } catch (err) {
      console.log(err);
    }
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
              <View style={styles.homeBtnWrapper}>
                <HomeBtn handleHome={handleHomeBtn} />
              </View>
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
