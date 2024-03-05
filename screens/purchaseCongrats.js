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
import {StoreApiData} from '../contextApi/store/storeContextApi';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const PurchaseCongrats = ({navigation}) => {
  const {setPurchaseStatus} = useContext(StoreApiData);

  useEffect(() => {
    setPurchaseStatus(prev => !prev);
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

  const goToStore = () => {
    // processLogout();
    navigation.navigate('salesShop');
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.quizOptionContainer}>
          <Text style={{color: '#ffffff'}}>
            Congratulations on your purchase
          </Text>
          <Pressable
            style={[styles.loadingBtn, styles.premiumBtn]}
            onPress={goToStore}>
            <Text style={[styles.loadingBtnText, {marginHorizontal: 5}]}>
              Go To Store
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default PurchaseCongrats;
