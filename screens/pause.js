import {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import SubmitBtn from '../component/submitBtn';
import styles from '../globalStyles/Styles';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const Pause = ({navigation}) => {
  const handleHome = () => {
    navigation.navigate('Dashboard');
  };

  let handleSave = () => {
    console.log('save');
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={[styles.quizOptionLead, styles.gameBoard]}>
        <View style={styles.quizOptionContainer}>
          <View style={styles.gameOptionsContainer}>
            <Text style={styles.questionNotAvailable}>Save quiz data</Text>
            <View style={styles.questionNotAvailImgContainer}>
              <View style={styles.resultImageContainer}>
                <Image
                  source={require('../assets/img/saveData.jpg')}
                  style={styles.resultImage}
                />
              </View>
            </View>
          </View>
          <View>
            <SubmitBtn
              btnText={'Yes'}
              width={300}
              borderRadius={30}
              topMargin={'5%'}
              action={handleSave}
            />
          </View>
          <View>
            <SubmitBtn
              btnText={'No'}
              width={300}
              borderRadius={30}
              topMargin={'2%'}
              color={'#000000'}
              action={handleHome}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default Pause;
