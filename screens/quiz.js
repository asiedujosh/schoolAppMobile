import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from '../globalStyles/Styles';
import {QUIZOPTIONS} from '../constant/quizConstant';
import SelectField from '../component/selectField';
import NumberField from '../component/numberField';
import SubmitBtn from '../component/submitBtn';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const Quiz = ({navigation}) => {
  const [quizOptions, setQuizOptions] = useState({
    quizType: QUIZOPTIONS.field[0].options[0],
    subject: QUIZOPTIONS.field[1].options[0],
    year: QUIZOPTIONS.field[2].options[0],
  });
  const [selectedValue, setSelectedValue] = useState('');

  const handleInputChange = (data, field) => {
    setQuizOptions({...quizOptions, [field]: data});
  };

  const handleSubmitQuizOptions = () => {
    console.log(quizOptions);
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.quizOptionContainer}>
          <View>
            <Text style={styles.dashboardHeadTitle}>{QUIZOPTIONS.title}</Text>
          </View>
          {QUIZOPTIONS.field.map((item, index) => {
            if (item.type === 'select') {
              return (
                <SelectField
                  key={index} // Add a unique key for each rendered element
                  title={item.label}
                  field={item.name}
                  top={'5%'}
                  option={item.options}
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
          <SubmitBtn
            btnText={QUIZOPTIONS.btnText}
            action={handleSubmitQuizOptions}
          />
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default Quiz;
