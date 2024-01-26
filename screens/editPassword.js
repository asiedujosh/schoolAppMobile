import {useState, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import styles from '../globalStyles/Styles';
import {Dimensions} from 'react-native';
import SubmitBtn from '../component/submitBtn';
import InputField from '../component/inputField';
import {EDITPASSWORDINFO} from '../constant/homeConstant';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const {width, height} = Dimensions.get('window');

const EditPassword = ({navigation}) => {
  let handleEditUserInfo = () => {
    console.log('Handle user info');
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.gameResultContainer}>
          <View style={styles.dashboardHeadFAQ}>
            <Text style={styles.dashboardHeadTitle}>
              {EDITPASSWORDINFO.title}
            </Text>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              <View style={styles.quizScrollContainer}>
                {EDITPASSWORDINFO.field.map((item, index) => (
                  <InputField
                    key={index}
                    top={0.04 * height}
                    title={item.label}
                    field={item.name}
                    width={width * 0.85}
                    placeholder={item.placeholder}
                    change={(data, field) => {
                      //   console.log('We are year');
                      handleInputChange(data, field);
                    }}
                  />
                ))}
                <View>
                  <SubmitBtn
                    btnText={EDITPASSWORDINFO.btnText}
                    width={width * 0.85}
                    borderRadius={30}
                    color={'#ffffff'}
                    textColor={'#0347A1'}
                    topMargin={0.05 * height}
                    action={handleEditUserInfo}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default EditPassword;
