import {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from '../globalStyles/Styles';
import PageBackBtn from '../component/backPageBtn.js';
import MakePayment from '../paymentGateway/paystackView.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {PackageApiData} from '../contextApi/package/packageContextApi.js';

const Upgrading = ({navigation}) => {
  const {packagePrice, processGettingAPackage, upgrade} =
    useContext(PackageApiData);
  const [paymentInfo, setPaymentInfo] = useState({});

  useEffect(() => {
    processGettingAPackage();
  }, []);

  useEffect(() => {
    let newPaymentInfo = {
      premium: true,
      amount: packagePrice && packagePrice.packagePrice,
    };
    setPaymentInfo(newPaymentInfo);
  }, [packagePrice]);

  useEffect(() => {
    if (upgrade) {
      navigation.navigate('UpgradeCongrats');
    }
  }, [upgrade]);

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard');
  };

  let outputData =
    packagePrice !== null ? (
      <View style={styles.quizOptionLead}>
        <View style={styles.quizOptionContainer}>
          <View
            style={[
              styles.dashboardHeadCard,
              styles.reviewCardTwo,
              styles.settingHeadCard,
            ]}>
            <View style={styles.dashboardHeadFAQ}>
              <Text style={[styles.dashboardHeadTitle]}>{`Premium`}</Text>
              <View style={[styles.homeBtnWrapper, {marginLeft: -30}]}>
                <PageBackBtn navigation={navigation} />
              </View>
            </View>
          </View>
          <View>
            <Image
              source={require('../assets/img/paymentMode.png')}
              style={styles.paymentModeImage}
            />
          </View>
          <View style={styles.scrollContainer}>
            <View style={[styles.analysisCard]}>
              <Text style={{color: '#000000'}}>
                An amount of GH{packagePrice.packagePrice} will be charged to
                upgrade your package
              </Text>
            </View>
            <MakePayment data={paymentInfo} />
          </View>
        </View>
      </View>
    ) : (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );

  return <KeyboardAvoidingContainer>{outputData}</KeyboardAvoidingContainer>;
};

export default Upgrading;
