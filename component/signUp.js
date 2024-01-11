import React, {useContext, useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import SubSignUpOne from './subSignUpOne';
import SubSignUpTwo from './subSignUpTwo';
import SubSignUpThree from './subSignUpThree';
import {SIGNUP} from '../constant/homeConstant';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import InputField from './inputField';
import styles from '../globalStyles/Styles';
import SubmitBtn from './submitBtn';

const SignUp = ({navigation}) => {
  const {
    registerStage,
    setRegisterStage,
    registerFormData,
    setRegisterFormData,
  } = useContext(AuthApiData);

  return (
    <View>
      <View style={styles.homeHeadTextContainer}>
        <Text style={styles.textTitle}>{SIGNUP.title}</Text>
      </View>
      <View>
        {registerStage == 3 && (
          <SubSignUpOne
            signUpdateFunction={[
              registerStage,
              setRegisterStage,
              registerFormData,
              setRegisterFormData,
            ]}
          />
        )}
        {registerStage == 4 && (
          <SubSignUpTwo
            signUpdateFunction={[
              registerStage,
              setRegisterStage,
              registerFormData,
              setRegisterFormData,
            ]}
          />
        )}

        {registerStage == 5 && (
          <SubSignUpThree
            nav={navigation}
            signUpdateFunction={[
              registerStage,
              setRegisterStage,
              registerFormData,
              setRegisterFormData,
            ]}
          />
        )}

        {/* <SubSignUpTwo />
        <SubSignUpThree /> */}
      </View>
    </View>
  );
};

export default SignUp;
