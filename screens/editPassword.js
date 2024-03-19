import {useState, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import styles from '../globalStyles/Styles';
import HomeBtn from '../component/homeBtn.js';
import {Dimensions} from 'react-native';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import SubmitBtn from '../component/submitBtn';
import InputField from '../component/inputField';
import {EDITPASSWORDINFO} from '../constant/homeConstant';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const {width, height} = Dimensions.get('window');

const EditPassword = ({navigation}) => {
  const {processEditPassword, signInLoading, setSignInLoading} =
    useContext(AuthApiData);
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (data, field) => {
    setFormData({...formData, [field]: data});
  };

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard');
  };

  const handleSubmit = () => {
    navigation.navigate('NotAvailable');
    // formData.oldPassword = formData.oldPassword.trim();
    // formData.newPassword = formData.newPassword.trim();
    // formData.confirmPassword = formData.confirmPassword.trim();
    // let err = [];
    // EDITPASSWORDINFO.field.map((item, index) => {
    //   if (
    //     !formData.oldPassword ||
    //     !formData.newPassword ||
    //     !formData.confirmPassword
    //   ) {
    //     let errData = {
    //       errName: item.name,
    //       errMsg: `* ${item.label} cannot be empty`,
    //     };
    //     err.push(errData);
    //   }
    // });

    // if (err.length !== 0) {
    //   setError(err);
    // } else {
    //   setError(error);
    //   setSignInLoading(true);
    //   processEditPassword(formData);
    // }
  };

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
              <Text style={[styles.dashboardHeadTitle]}>
                {EDITPASSWORDINFO.title}
              </Text>
              <View style={[styles.homeBtnWrapper, {marginLeft: -40}]}>
                <HomeBtn handleHome={handleHomeBtn} />
              </View>
            </View>
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
                    action={handleSubmit}
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
