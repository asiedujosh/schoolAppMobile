import {useState, useContext, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import styles from '../globalStyles/Styles';
import {QUIZOPTIONS} from '../constant/quizConstant';
import SelectField from '../component/selectField';
import NumberField from '../component/numberField';
import SubmitBtn from '../component/submitBtn';
import LoadingBtn from '../component/loadingBtn.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const StudyMaterial = ({navigation}) => {
  const {
    examOptions,
    yearOptions,
    subjectOptions,
    processGetQuestions,
    questions,
    loadingQuestions,
    setLoadingQuestions,
  } = useContext(QuestionApiData);

  const [quizOptions, setQuizOptions] = useState({
    quizType: examOptions && examOptions[0],
    subject: subjectOptions && subjectOptions[0],
    year: yearOptions && yearOptions[0],
    questionNos: '100',
    questionStyle: 'Straight',
  });
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    try {
      if (questions) {
        if (questions.length > 0) {
          navigation.navigate('GameBoard');
        } else {
          navigation.navigate('QuestionsNotAvailable');
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [questions]);

  const handleInputChange = (data, field) => {
    setQuizOptions({...quizOptions, [field]: data});
  };

  const handleOptionAssign = item => {
    try {
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
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitQuizOptions = () => {
    setLoadingQuestions(true);
    processGetQuestions(quizOptions);
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.quizOptionContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.quizScrollContainer}>
              <View>
                <Text style={styles.dashboardHeadTitle}>
                  {QUIZOPTIONS.title}
                </Text>
              </View>
              {QUIZOPTIONS.field.map((item, index) => {
                if (item.type === 'select') {
                  return (
                    <SelectField
                      key={index} // Add a unique key for each rendered element
                      title={item.label}
                      field={item.name}
                      top={'5%'}
                      width={300}
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
                      top={'5%'}
                      width={300}
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
                    width={300}
                    borderRadius={30}
                    topMargin={'5%'}
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

export default StudyMaterial;
