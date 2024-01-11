import React, {useContext, useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {SIGNIN} from '../constant/homeConstant';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import InputField from './inputField';
import styles from '../globalStyles/Styles';
import SubmitBtn from './submitBtn';

const SignIn = ({navigation}) => {
  const {
    registerStage,
    setRegisterStage,
    registerFormData,
    setRegisterFormData,
  } = useContext(AuthApiData);

  const handleStageChange = () => {
    console.log('We are working');
    // let i = signUpdateFunction[0] + 1;
    // if (i > 2) {
    //   console.log('We are registering...');
    // } else {
    //   signUpdateFunction[1](i);
    // }
  };

  return (
    <View>
      <View style={styles.homeHeadTextContainer}>
        <Text style={styles.textTitle}>{SIGNIN.title}</Text>
      </View>
      <View>
        {SIGNIN.field.map((item, index) => (
          <InputField
            key={index}
            top={item.label == SIGNIN.field[0].label ? '2%' : '5%'}
            title={item.label}
            field={item.name}
            placeholder={item.placeholder}
            change={(data, field) => {
              //   console.log('We are year');
              handleInputChange(data, field);
            }}
          />
        ))}
      </View>
      <View style={styles.homeBtnContainer}>
        <SubmitBtn btnText={SIGNIN.btnText} action={handleStageChange} />
      </View>
    </View>
  );
};

export default SignIn;
