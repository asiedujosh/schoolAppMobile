import React, {useContext, useState, useEffect} from 'react';
import {Text, View, Pressable} from 'react-native';
import SubmitBtn from './submitBtn';
import {SIGNOPTIONS} from '../constant/homeConstant';
// import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import styles from '../globalStyles/Styles';

const SignUpOptions = ({change}) => {
  // const {registerStage, setRegisterStage} = useContext(AuthApiData);

  const handleStageChange = () => {
    let i = change[0] + 1;
    change[1](i);
  };

  const handleStageChangeTwo = () => {
    let i = change[0] + 2;
    change[1](i);
    console.log(i);
  };

  return (
    <View>
      <View style={styles.homeBtnContainer}>
        <SubmitBtn btnText={SIGNOPTIONS.btnOne} action={handleStageChange} />
      </View>
      <View style={styles.separateContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.separator} />
      </View>
      <View style={styles.homeBtnContainer}>
        <SubmitBtn btnText={SIGNOPTIONS.btnTwo} action={handleStageChangeTwo} />
      </View>
    </View>
  );
};

export default SignUpOptions;
