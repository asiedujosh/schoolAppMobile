import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../globalStyles/Styles';
import {AuthApiData} from '../contextApi/auth/authContextApi';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const UpgradeCongrats = ({navigation}) => {
  const {processLogout, alreadyLoggedIn} = useContext(AuthApiData);

  useEffect(() => {
    const backAction = () => {
      // Return true to prevent default back button behavior
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (!alreadyLoggedIn) {
      navigation.navigate('Home');
    }
  }, [alreadyLoggedIn]);

  const handleLogout = () => {
    processLogout();
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.quizOptionContainer}>
          <Text style={{color: '#ffffff'}}>
            Congratulations You are now using a premium version, Login to
            Experience your package
          </Text>
          <Pressable
            style={[styles.loadingBtn, styles.premiumBtn]}
            onPress={handleLogout}>
            <Text style={[styles.loadingBtnText, {marginHorizontal: 5}]}>
              Logout
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default UpgradeCongrats;
