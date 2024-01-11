import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import {SIGNUP} from '../constant/homeConstant';
import CountrySelect from './selectCountry';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import LoadingBtn from '../component/loadingBtn';
import InputField from './inputField';
import styles from '../globalStyles/Styles';
import SubmitBtn from './submitBtn';

const SubSignUpThree = ({nav, signUpdateFunction}) => {
  const {processRegister, registerFormData, loading} = useContext(AuthApiData);

  const handleInputChange = (data, field) => {
    signUpdateFunction[3]({...signUpdateFunction[2], [field]: data});
  };

  const handleStageChange = () => {
    //Check If its filled in
    let err = [];
    SIGNUP.field.map((item, index) => {
      if (!signUpdateFunction[2] || !signUpdateFunction[2][item.name]) {
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
      let i = signUpdateFunction[0] + 1;
      if (i > 5) {
        processRegister(registerFormData);
        //console.log(signUpdateFunction[2]);
      }
    }
  };

  return (
    <>
      <View style={styles.homeBodyTextContainer}>
        {SIGNUP.field3.map((item, index) => (
          <InputField
            key={index}
            top={item.label == SIGNUP.field3[0].label ? '2%' : '5%'}
            title={item.label}
            field={item.name}
            placeholder={item.placeholder}
            change={(data, field) => {
              handleInputChange(data, field);
            }}
          />
        ))}
      </View>
      <View style={styles.homeBtnContainer}>
        {loading ? (
          <LoadingBtn />
        ) : (
          <SubmitBtn btnText={SIGNUP.btnText[1]} action={handleStageChange} />
        )}
      </View>
    </>
  );
};

export default SubSignUpThree;
