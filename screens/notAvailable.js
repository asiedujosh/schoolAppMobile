import {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import {Dimensions} from 'react-native';
import SubmitBtn from '../component/submitBtn';
import styles from '../globalStyles/Styles';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const {width, height} = Dimensions.get('window');

const NotAvailable = ({navigation}) => {
  const handleTryAgain = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={[styles.quizOptionLead, styles.gameBoard]}>
        <View style={styles.quizOptionContainer}>
          <View style={styles.gameOptionsContainer}>
            <Text style={styles.questionNotAvailable}>
              Work in progress....
            </Text>
            <View style={styles.questionNotAvailImgContainer}>
              <View style={styles.resultImageContainer}>
                <Image
                  source={require('../assets/img/confusedEmoji.jpg')}
                  style={styles.resultImage}
                />
              </View>
            </View>
          </View>
          <View style={{flex: 0.5}}>
            <SubmitBtn
              btnText={'Home'}
              width={width * 0.85}
              color={'#ffffff'}
              textColor={'#0347A1'}
              borderRadius={width * 0.15}
              topMargin={'5%'}
              action={handleTryAgain}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default NotAvailable;
