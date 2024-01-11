import React, {useContext} from 'react';
import {Image, View} from 'react-native';
import styles from '../globalStyles/Styles';
import GetStarted from '../component/getStarted';
import SignUp from '../component/signUp';
import SignIn from '../component/signIn.js';
import SignUpOptions from '../component/signUpOptions.js';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const Home = ({navigation}) => {
  const {registerStage, setRegisterStage} = useContext(AuthApiData);

  return (
    <KeyboardAvoidingContainer>
      <View style={{flex: 1, padding: 0}}>
        <View style={styles.container}>
          <Image
            source={require('../assets/img/student.jpg')} // Replace with the actual path to your image
            style={styles.image}
          />
        </View>

        <View style={styles.homeCard}>
          {registerStage == 0 && (
            <GetStarted change={[registerStage, setRegisterStage]} />
          )}
          {registerStage == 1 && (
            <SignUpOptions change={[registerStage, setRegisterStage]} />
          )}
          {registerStage == 2 && (
            <SignIn change={[registerStage, setRegisterStage]} />
          )}
          {registerStage >= 3 && <SignUp navigation={navigation} />}
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default Home;
