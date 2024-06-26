import React, {useContext, useState, useEffect} from 'react';
import {Text, View, Pressable} from 'react-native';
import {SIGNIN} from '../constant/homeConstant';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import ErrorModal from '../errorComponents/errorModal.js';
import InputField from './inputField';
import LoadingBtn from './loadingBtn.js';
import styles from '../globalStyles/Styles';
import SubmitBtn from './submitBtn';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const SignIn = ({navigation}) => {
  const {
    processLogin,
    signInLoading,
    setSignInLoading,
    setSignInError,
    signInError,
  } = useContext(AuthApiData);
  const [formData, setFormData] = useState({
    username: null,
    password: null,
  });
  const [error, setError] = useState();

  useEffect(() => {
    if (signInError) {
      let err = [];
      let errData = {
        errName: 'username',
        errMsg: 'Username or password incorrect',
      };
      err.push(errData);
      setError(err);
    }
  }, [signInError]);

  const handleInputChange = (data, field) => {
    setFormData({...formData, [field]: data});
  };

  const handleLogin = () => {
    formData.username = formData.username && formData.username.trim();
    formData.password = formData.password && formData.password.trim();
    let err = [];
    SIGNIN.field.map((item, index) => {
      if (!formData.username || !formData.password) {
        let errData = {
          errName: item.name,
          errMsg: `* ${item.label} cannot be empty`,
        };
        err.push(errData);
      }
    });

    if (err.length !== 0) {
      setError(err);
    } else {
      setError(error);
      setSignInLoading(true);
      setSignInError(false);
      processLogin(formData);
    }
  };

  let GoToForgetPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View>
      <View style={styles.homeHeadTextContainer}>
        <Text style={styles.textTitle}>{SIGNIN.title}</Text>
      </View>
      <View style={{width: '100%', alignItems: 'center', marginTop: '2%'}}>
        {SIGNIN.field.map((item, index) => (
          <InputField
            key={index}
            top={
              item.label == SIGNIN.field[0].label
                ? 0.02 * height
                : 0.04 * height
            }
            title={item.label}
            width={width * 0.85}
            field={item.name}
            err={error}
            placeholder={item.placeholder}
            change={(data, field) => {
              //   console.log('We are year');
              handleInputChange(data, field);
            }}
          />
        ))}
      </View>
      <Pressable
        style={{width: '100%', alignItems: 'center', marginTop: '5%'}}
        onPress={GoToForgetPassword}>
        <Text style={[styles.textLabel, {marginBottom: 0}]}>
          Forgot Password ?
        </Text>
      </Pressable>
      <View style={styles.homeBtnContainer}>
        {signInLoading ? (
          <LoadingBtn />
        ) : (
          <SubmitBtn
            btnText={SIGNIN.btnText}
            width={width * 0.85}
            color={'#ffffff'}
            textColor={'#0347A1'}
            borderRadius={width * 0.15}
            topMargin={0.02 * height}
            action={handleLogin}
          />
        )}
      </View>
      <ErrorModal />
    </View>
  );
};

export default SignIn;
