import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import PageBackBtn from '../component/backPageBtn.js';

const {width, height} = Dimensions.get('window');

const SendMessage = ({navigation}) => {
  const [whatsAppMsg, setWhatsAppMsg] = useState('Nunyae App support');

  const initiateWhatsApp = () => {
    // Check for perfect 10 digit length
    // Using 91 for India
    // You can change 91 with your country code
    let url =
      'whatsapp://send?text=' + whatsAppMsg + '&phone=233' + '200588522';
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };

  return (
    <KeyboardAvoidingContainer>
      <View
        style={{
          flex: 1,
          backgroundColor: '#0347A1',
          paddingVertical: 10,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: width * 0.9,
          }}>
          <Text
            style={[
              styles.dashboardHeadTitle,
              {
                fontSize: 26,
                color: '#ffffff',
                fontWeight: 'bold',
                paddingLeft: 20,
              },
            ]}>
            {'Support'}
          </Text>
          <PageBackBtn navigation={navigation} />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.titleText}>How can we help you</Text>
        <Text style={styles.titleTextsmall}>Send A Message</Text>
        <TextInput
          value={whatsAppMsg}
          onChangeText={whatsAppMsg => setWhatsAppMsg(whatsAppMsg)}
          placeholder={'WhatsApp Message'}
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={initiateWhatsApp}>
          <Text style={styles.buttonTextStyle}>Send WhatsApp Message</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default SendMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
    color: '#000000',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#0347A1',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});
