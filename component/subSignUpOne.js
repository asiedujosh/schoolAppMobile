import React, {useContext, useState, useEffect} from 'react';
import {View} from 'react-native';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import CountrySelect from './selectCountry.js';
import {SIGNUP} from '../constant/homeConstant';
import InputField from './inputField';
import {Dimensions} from 'react-native';
import styles from '../globalStyles/Styles';
import SubmitBtn from './submitBtn';

const {width, height} = Dimensions.get('window');

const SubSignUpOne = ({signUpdateFunction}) => {
  const {registerFormData, setRegisterFormData} = useContext(AuthApiData);
  const [error, setError] = useState();

  const handleInputChange = (data, field) => {
    setRegisterFormData({...registerFormData, [field]: data});
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
      signUpdateFunction[1](i);
    }
    // console.log(registerFormData);
  };

  return (
    <>
      <View style={styles.homeBodyTextContainer}>
        {SIGNUP.field.map((item, index) =>
          item.name !== 'tel' ? (
            <InputField
              key={index}
              top={
                item.label == SIGNUP.field[0].label
                  ? 0.005 * height
                  : 0.04 * height
              }
              title={item.label}
              field={item.name}
              width={width * 0.85}
              err={error}
              placeholder={item.placeholder}
              change={(data, field) => {
                //   console.log('We are year');
                handleInputChange(data, field);
              }}
            />
          ) : (
            <CountrySelect
              top={0.04 * height}
              change={(data, field) => {
                //   console.log('We are year');
                handleInputChange(data, field);
              }}
            />
          ),
        )}
      </View>
      <View style={styles.homeBtnContainer}>
        <SubmitBtn
          btnText={SIGNUP.btnText[0]}
          width={width * 0.85}
          color={'#ffffff'}
          textColor={'#0347A1'}
          borderRadius={width * 0.15}
          topMargin={0.05 * height}
          action={handleStageChange}
        />
      </View>
    </>
  );
};

export default SubSignUpOne;
