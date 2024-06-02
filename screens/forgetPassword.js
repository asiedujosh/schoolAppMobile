import {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Dimensions} from 'react-native';
import HomeBtn from '../component/homeBtn.js';
import styles from '../globalStyles/Styles';
import SubmitBtn from '../component/submitBtn';
import LoadingBtn from '../component/loadingBtn.js';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import InputField from '../component/inputField';
import {FORGOTPASSWORD, RESETPASSWORD} from '../constant/homeConstant';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const {width, height} = Dimensions.get('window');

const ForgetPassword = ({navigation}) => {
  const {
    processForgotPassword,
    processResetPassword,
    setResetPasswordPage,
    resetPasswordPage,
    resetLoader,
    setResetLoader,
    forgotSuccessMessage,
    resetSuccess,
  } = useContext(AuthApiData);

  const [forgotPassError, setForgotPassError] = useState();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setResetPasswordPage(false);
  }, []);

  useEffect(() => {
    if (resetSuccess) {
      navigation.navigate('Home');
    }
  }, [resetSuccess]);

  let handleHomeBtn = () => {
    navigation.navigate('Home');
  };

  const handleInputChange = (data, field) => {
    setFormData({...formData, [field]: data});
  };

  let handleReset = () => {
    //Check validations
    let err = [];
    setForgotPassError(err);
    RESETPASSWORD.field.map((item, index) => {
      if (!formData[item.name]) {
        let errData = {
          errName: item.name,
          errMsg: `* ${item.label} cannot be empty`,
        };
        err.push(errData);
      }
    });

    if (err.length == 0) {
      if (formData.password !== formData.confirmPassword) {
        let errData = {
          errName: 'confirmPassword',
          errMsg: `* Passwords don't match`,
        };
        err.push(errData);
      }
    }

    if (err.length !== 0) {
      setForgotPassError(err);
    } else {
      let resetData = {
        code: formData.resetCode,
        password: formData.password,
      };

      console.log(resetData);
      processResetPassword(resetData);
    }
  };

  let handleSubmit = () => {
    setResetLoader(prev => !prev);
    //Check validations
    let err = [];
    setForgotPassError(err);
    FORGOTPASSWORD.field.map((item, index) => {
      if (!formData[item.name]) {
        let errData = {
          errName: item.name,
          errMsg: `${item.label} cannot be empty`,
        };
        err.push(errData);
      }
    });

    if (err.length !== 0) {
      setForgotPassError(err);
      setResetLoader(prev => !prev);
    } else {
      // console.log('We will get it right');
      processForgotPassword(formData);
    }
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
                {FORGOTPASSWORD.title}
              </Text>
              <View style={[styles.homeBtnWrapper, {marginLeft: -70}]}>
                <HomeBtn handleHome={handleHomeBtn} />
              </View>
            </View>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              {resetPasswordPage ? (
                <View style={styles.quizScrollContainer}>
                  <View>
                    <Text style={{color: '#ffffff'}}>
                      {forgotSuccessMessage}
                    </Text>
                  </View>
                  {RESETPASSWORD.field.map((item, index) => (
                    <InputField
                      key={index}
                      top={0.04 * height}
                      title={item.label}
                      field={item.name}
                      width={width * 0.85}
                      err={forgotPassError}
                      placeholder={item.placeholder}
                      change={(data, field) => {
                        //   console.log('We are year');
                        handleInputChange(data, field);
                      }}
                    />
                  ))}
                  <View>
                    {resetLoader ? (
                      <LoadingBtn />
                    ) : (
                      <SubmitBtn
                        btnText={FORGOTPASSWORD.btnText}
                        width={width * 0.85}
                        color={'#ffffff'}
                        textColor={'#0347A1'}
                        borderRadius={30}
                        topMargin={0.05 * height}
                        action={handleReset}
                      />
                    )}
                  </View>
                </View>
              ) : (
                <View style={styles.quizScrollContainer}>
                  <View>
                    <Text style={{color: '#ffffff'}}>
                      {FORGOTPASSWORD.subTitle}
                    </Text>
                  </View>
                  {FORGOTPASSWORD.field.map((item, index) => (
                    <InputField
                      key={index}
                      top={0.04 * height}
                      title={'Email'}
                      field={item.name}
                      width={width * 0.85}
                      err={forgotPassError}
                      placeholder={item.placeholder}
                      change={(data, field) => {
                        //   console.log('We are year');
                        handleInputChange(data, field);
                      }}
                    />
                  ))}
                  {/* <View style={{marginTop: '10%', width: '100%'}}>
                  <CountrySelect />
                </View> */}
                  <View>
                    {resetLoader ? (
                      <LoadingBtn />
                    ) : (
                      <SubmitBtn
                        btnText={FORGOTPASSWORD.btnText}
                        width={width * 0.85}
                        color={'#ffffff'}
                        textColor={'#0347A1'}
                        borderRadius={30}
                        topMargin={0.05 * height}
                        action={handleSubmit}
                      />
                    )}
                  </View>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default ForgetPassword;
