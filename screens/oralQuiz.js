import {useState, useContext, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {StoreApiData} from '../contextApi/store/storeContextApi';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {Dimensions} from 'react-native';
import styles from '../globalStyles/Styles';
import {QUIZOPTIONS} from '../constant/quizConstant';
import SelectField from '../component/selectField';
import NumberField from '../component/numberField';
import SubmitBtn from '../component/submitBtn';
import LoadingBtn from '../component/loadingBtn.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const {width, height} = Dimensions.get('window');

const OralQuiz = ({navigation}) => {
  const {isOffline} = useContext(AuthApiData);
  const {
    examOptions,
    examsList,
    yearList,
    subjectList,
    yearOptions,
    subjectOptions,
    processGetQuestions,
    processgetOralQuestions,
    oralQuestions,
    loadingQuestions,
    setLoadingQuestions,
  } = useContext(QuestionApiData);
  const {purchases, freeProducts} = useContext(StoreApiData);

  const [quizOptions, setQuizOptions] = useState({
    quizType: examOptions && examOptions[0],
    subject: subjectOptions && subjectOptions[0],
    year: yearOptions && yearOptions[0],
    questionNos: '100',
    questionStyle: 'Straight',
  });
  const [selectedValue, setSelectedValue] = useState('');
  const [fieldError, setFieldError] = useState(false);

  useEffect(() => {
    if (oralQuestions) {
      if (oralQuestions.length > 0) {
        navigation.navigate('OralGameBoard');
      } else {
        navigation.navigate('QuestionsNotAvailable');
      }
    }
  }, [oralQuestions]);

  useEffect(() => {
    if (fieldError) {
      ErrorPopup();
    }
  }, [fieldError]);

  const handleInputChange = (data, field) => {
    setQuizOptions({...quizOptions, [field]: data});
  };

  const handleOptionAssign = item => {
    let Option;
    switch (item.name) {
      case 'quizType':
        Option = examOptions;
        break;
      case 'subject':
        Option = subjectOptions;
        break;
      case 'year':
        Option = yearOptions;
        break;
      case 'topic':
        Option = topicOptions;
        break;
      default:
        Option = ['Straight', 'Random'];
    }
    return Option;
  };

  let handleNotPurchased = () => {
    setLoadingQuestions(false);
    navigation.navigate('NotPurchased');
  };

  const NetWorkCheck = () => {
    Alert.alert('Network Error', 'Please connect to the internet', [
      {
        text: 'Ok',
        onPress: () => null,
        style: 'cancel',
      },
    ]);
  };

  const ErrorPopup = () => {
    Alert.alert('Select Field', 'Select appropriate fields', [
      {
        text: 'Ok',
        onPress: () => setFieldError(prev => !prev),
        style: 'cancel',
      },
    ]);
  };

  const handleSubmitQuizOptions = () => {
    if (!isOffline) {
      NetWorkCheck();
    } else {
      setLoadingQuestions(true);
      console.log(quizOptions);

      if (
        quizOptions.quizType == examOptions[0] ||
        quizOptions.subject == subjectOptions[0] ||
        quizOptions.year == yearOptions[0]
      ) {
        setLoadingQuestions(false);
        setFieldError(prev => !prev);
        console.log('Select required Info');
      } else {
        //Get convertion
        // let examId = examsList.filter(
        //   item => item.exam == quizOptions.quizType,
        // )[0].id;
        // let yearId = yearList.filter(item => item.year == quizOptions.year)[0]
        //   .id;
        // let subjectId = subjectList.filter(
        //   item => item.subject == quizOptions.subject,
        // )[0].id;

        // let entryData = {
        //   examId: examId,
        //   yearId: yearId,
        //   subjectId: subjectId,
        // };

        // let checkPurchase = purchases.filter(
        //   item =>
        //     item.examId == entryData.examId &&
        //     item.yearId == entryData.yearId &&
        //     item.subjectId == entryData.subjectId,
        // );
        // let checkFree = freeProducts.filter(
        //   item =>
        //     item.examId == entryData.examId &&
        //     item.yearId == entryData.yearId &&
        //     item.subjectId == entryData.subjectId,
        // );
        // console.log(checkPurchase);
        // checkPurchase.length == 0 && checkFree.length == 0
        //   ? handleNotPurchased()
        //   : processGetQuestions(quizOptions);

        // setLoadingQuestions(true);
        // console.log(quizOptions);
        processgetOralQuestions(quizOptions);
      }
    }
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.quizOptionContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.quizScrollContainer}>
              <View>
                <Text style={styles.dashboardHeadTitle}>{'Oral Quiz'}</Text>
              </View>
              {QUIZOPTIONS.field.map((item, index) => {
                if (item.type === 'select') {
                  return (
                    <SelectField
                      key={index} // Add a unique key for each rendered element
                      title={item.label}
                      field={item.name}
                      top={0.04 * height}
                      width={width * 0.85}
                      option={handleOptionAssign(item)}
                      change={[
                        selectedValue,
                        setSelectedValue,
                        quizOptions,
                        setQuizOptions,
                      ]}
                    />
                  );
                } else {
                  return (
                    <NumberField
                      key={index}
                      top={0.04 * height}
                      width={width * 0.85}
                      title={item.label}
                      field={item.name}
                      placeholder={item.placeholder}
                      change={(data, field) => {
                        handleInputChange(data, field);
                      }}
                    />
                  );
                }
                // return null; // Return null for non-'select' types
              })}
              <View>
                {loadingQuestions ? (
                  <LoadingBtn />
                ) : (
                  <SubmitBtn
                    btnText={QUIZOPTIONS.btnText}
                    width={width * 0.85}
                    color={'#ffffff'}
                    textColor={'#0347A1'}
                    borderRadius={width * 0.15}
                    topMargin={0.05 * height}
                    action={handleSubmitQuizOptions}
                  />
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default OralQuiz;
