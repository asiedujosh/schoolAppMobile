import React, {useContext, useState, useEffect} from 'react';
import {Text, View, Pressable} from 'react-native';
import SubmitBtn from './submitBtn';
import {Dimensions} from 'react-native';
import {SIGNOPTIONS} from '../constant/homeConstant';
// import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import styles from '../globalStyles/Styles';

const {width, height} = Dimensions.get('window');

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
      <View style={[styles.homeBtnContainer, {marginTop: '15%'}]}>
        <SubmitBtn
          btnText={SIGNOPTIONS.btnOne}
          width={width * 0.8}
          topMargin={0.04 * height}
          color={'#0347A1'}
          textColor={'#ffffff'}
          borderRadius={width * 0.15}
          action={handleStageChange}
        />
      </View>
      <View style={styles.separateContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.separator} />
      </View>
      <View style={styles.homeBtnContainer}>
        <SubmitBtn
          btnText={SIGNOPTIONS.btnTwo}
          width={width * 0.8}
          color={'#0347A1'}
          textColor={'#ffffff'}
          topMargin={0.04 * height}
          borderRadius={width * 0.15}
          action={handleStageChangeTwo}
        />
      </View>
    </View>
  );
};

export default SignUpOptions;
