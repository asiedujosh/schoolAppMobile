import React, {useContext, useState, useEffect} from 'react';
import {Text, View, Pressable} from 'react-native';
import SubmitBtn from './submitBtn';
import {START} from '../constant/homeConstant';
// import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import styles from '../globalStyles/Styles';

const GetStarted = ({change}) => {
  // const {registerStage, setRegisterStage} = useContext(AuthApiData);

  const handleStageChange = () => {
    let i = change[0] + 1;
    if (i > 2) {
      console.log('We are registering...');
    } else {
      // console.log(i);
      change[1](i);
    }
  };

  return (
    <View>
      <View style={styles.homeHeadTextContainer}>
        <Text style={styles.textTitle}>{START.title}</Text>
      </View>
      <View style={styles.homeBodyTextContainer}>
        <Text style={styles.homeBodyText}>{START.body}</Text>
      </View>
      <View style={styles.homeBtnContainer}>
        <SubmitBtn
          btnText={START.btnText}
          width={300}
          topMargin={'8%'}
          borderRadius={30}
          action={handleStageChange}
        />
      </View>
    </View>
  );
};

export default GetStarted;
