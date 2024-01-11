import React, {useContext, useState, useEffect} from 'react';
import {View} from 'react-native';
import {SIGNUP} from '../constant/homeConstant';
import InputField from './inputField';
import styles from '../globalStyles/Styles';
import SubmitBtn from './submitBtn';

const SubSignUpTwo = ({signUpdateFunction}) => {
  const [error, setError] = useState();
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
      if (
        signUpdateFunction[2][SIGNUP.field2[0].name] !==
        signUpdateFunction[2][SIGNUP.field2[1].name]
      ) {
        let errData = {
          errName: SIGNUP.field2[1].name,
          errMsg: `* passwords does not match`,
        };
        err.push(errData);
        setError(err);
      } else {
        let i = signUpdateFunction[0] + 1;
        signUpdateFunction[1](i);
      }
    }
  };

  return (
    <>
      <View style={styles.homeBodyTextContainer}>
        {SIGNUP.field2.map((item, index) => (
          <InputField
            key={index}
            top={item.label == SIGNUP.field2[0].label ? '2%' : '5%'}
            title={item.label}
            field={item.name}
            err={error}
            placeholder={item.placeholder}
            change={(data, field) => {
              handleInputChange(data, field);
            }}
          />
        ))}
      </View>
      <View style={styles.homeBtnContainer}>
        <SubmitBtn btnText={SIGNUP.btnText[0]} action={handleStageChange} />
      </View>
    </>
  );
};

export default SubSignUpTwo;
