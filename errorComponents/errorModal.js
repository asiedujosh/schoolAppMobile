import {useState, useEffect, useContext} from 'react';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {View, Modal, TouchableOpacity, Text, Image} from 'react-native';
import styles from '../globalStyles/Styles';

const ErrorModal = () => {
  const {
    netWorkError,
    setNetworkError,
    unknownError,
    setUnknownError,
    errorMessage,
    setErrorMessage,
  } = useContext(AuthApiData);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (netWorkError === true) {
      setErr(netWorkError);
    }

    if (unknownError === true) {
      setErr(unknownError);
    }
  }, [netWorkError, unknownError]);

  // console.log(netWork);
  // setErr(netWork[0]);
  //Check which error it is

  let handleCloseModel = () => {
    if (netWorkError) {
      setNetworkError(prev => !prev);
      setErr(prev => !prev);
      setErrorMessage('');
    } else {
      setUnknownError(prev => !prev);
      setErr(prev => !prev);
      setErrorMessage('');
    }
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={err}
      onRequestClose={() => handleCloseModel()}>
      <View style={styles.errorModalBackground}>
        <TouchableOpacity onPress={() => handleCloseModel()}>
          <View style={styles.errorCard}>
            <View styles={styles.errorImgContainer}>
              <Image
                source={require('../assets/img/error1.png')}
                style={styles.errorImg}
              />
            </View>
            <View style={styles.errorTextContainer}>
              <Text style={styles.errorText}>{errorMessage}</Text>
            </View>

            <View style={styles.errorBtn}>
              <Text style={styles.errorBtnText}>Ok</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ErrorModal;
