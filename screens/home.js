import React, {useContext, useEffect} from 'react';
import {Image, View} from 'react-native';
import styles from '../globalStyles/Styles';
import GetStarted from '../component/getStarted';
import BackBtn from '../component/backBtn.js';
import SignUp from '../component/signUp';
import SignIn from '../component/signIn.js';
import SignUpOptions from '../component/signUpOptions.js';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const Home = ({navigation}) => {
  const {registerStage, setRegisterStage, alreadyLoggedIn} =
    useContext(AuthApiData);

  useEffect(() => {
    if (alreadyLoggedIn) {
      navigation.navigate('Dashboard');
    }
  }, [alreadyLoggedIn]);

  return (
    <KeyboardAvoidingContainer>
      <View style={{flex: 1, padding: 0}}>
        <View style={styles.container}>
          <Image
            source={require('../assets/img/student.jpg')} // Replace with the actual path to your image
            style={styles.image}
          />
        </View>
        {registerStage > 0 && (
          <View style={styles.backBtnContainer}>
            <BackBtn change={[registerStage, setRegisterStage]} />
          </View>
        )}
        <View
          style={[
            styles.homeCard,
            {backgroundColor: registerStage > 1 ? '#0347A1' : '#ffffff'},
          ]}>
          {registerStage == 0 && (
            <GetStarted change={[registerStage, setRegisterStage]} />
          )}
          {registerStage == 1 && (
            <SignUpOptions change={[registerStage, setRegisterStage]} />
          )}
          {registerStage == 2 && (
            <SignIn
              change={[registerStage, setRegisterStage]}
              navigation={navigation}
            />
          )}
          {registerStage >= 3 && <SignUp navigation={navigation} />}
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default Home;
