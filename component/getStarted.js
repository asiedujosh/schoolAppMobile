import React, {useContext, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Linking} from 'react-native';
import SubmitBtn from './submitBtn';
import {Dimensions} from 'react-native';
import {START} from '../constant/homeConstant';
import {POLICYURL} from '../constant/httpConstant';
// import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import styles from '../globalStyles/Styles';

const {width, height} = Dimensions.get('window');

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

  const handlePressLink = () => {
    Linking.openURL(POLICYURL);
  };

  return (
    <View>
      <View style={styles.homeHeadTextContainer}>
        <Text style={[styles.textTitle, {color: '#0347A1'}]}>
          {START.title}
        </Text>
      </View>
      <View style={styles.homeBodyTextContainer}>
        <Text style={styles.homeBodyText}>{START.body}</Text>
        <Text>View our privacy policy</Text>

        <TouchableOpacity onPress={handlePressLink}>
          <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
            here
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.homeBtnContainer}>
        <SubmitBtn
          btnText={START.btnText}
          width={width * 0.8}
          topMargin={0.05 * height}
          borderRadius={width * 0.15}
          color={'#0347A1'}
          textColor={'#ffffff'}
          action={handleStageChange}
        />
      </View>
    </View>
  );
};

export default GetStarted;
