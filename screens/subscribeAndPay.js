import {useState, useContext, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  FlatList,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from '../globalStyles/Styles.js';
import PageBackBtn from '../component/backPageBtn.js';
import SubmitBtn from '../component/submitBtn';
import OverlayComponent from '../component/paymentCurtain.js';
import AlertCurtain from '../component/alertCurtain.js';
import {PriceApiData} from '../contextApi/price/priceContextApi.js';
import {SubscriptionApiData} from '../contextApi/subscription/subscriptionContextApi';
import {PackageApiData} from '../contextApi/package/packageContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer.js';

const {width, height} = Dimensions.get('window');

const SubscribeAndPay = ({route, navigation}) => {
  const {mySubscriptionList} = useContext(SubscriptionApiData);
  const {priceList} = useContext(PriceApiData);
  const {confirmSubscription, setConfirmSubscription} =
    useContext(PackageApiData);
  const [modalVisible, setModalVisible] = useState(false);
  const [promptVisible, setPromptVisible] = useState(false);
  const [payDetails, setPayDetails] = useState();
  const {id} = route.params;

  useEffect(() => {
    if (confirmSubscription) {
      setModalVisible(prev => !prev);
      setConfirmSubscription(prev => !prev);
    }
  }, [confirmSubscription]);

  //Check if already subscribed
  let checkIfPurchasedAlready = item => {
    if (mySubscriptionList.length > 0) {
      let check = mySubscriptionList.find(
        original => original.examSubjectId == item.examSubjectId,
      );
      return check !== undefined ? true : false;
    }
  };

  let handleSubscribe = item => {
    let result = checkIfPurchasedAlready(item);
    if (result) {
      setPromptVisible(prev => !prev);
    } else {
      setPayDetails(item);
      setModalVisible(true);
    }
    // setPayDetails(item);
    // setModalVisible(true);
  };

  let subscribeOpt =
    priceList.length > 0
      ? priceList.filter(item => item.examSubjectId == id)
      : [];

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.quizOptionContainer}>
          <View
            style={[
              styles.dashboardHeadCard,
              styles.reviewCardTwo,
              styles.settingHeadCard,
            ]}>
            <View style={styles.dashboardHeadFAQ}>
              <Text style={[styles.dashboardHeadTitle]}>{`Package`}</Text>
              <View style={[styles.homeBtnWrapper, {marginLeft: -30}]}>
                <PageBackBtn navigation={navigation} />
              </View>
            </View>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              <View style={{marginBottom: '15%'}}>
                <FlatList
                  data={subscribeOpt}
                  pagingEnabled
                  snapToAlignment="center"
                  scrollEventThrottle={16}
                  decelerationRate={'fast'}
                  renderItem={({item}) => {
                    return (
                      <View
                        style={[styles.subscribeCardContainer]}
                        key={item.id}>
                        <Text
                          style={[styles.homeBodyText, styles.subscribeTitle]}>
                          {item.examSubjectId}
                        </Text>
                        <View style={styles.subscribeSubContainer}>
                          <Text style={styles.subscibePrice}>
                            GH {item.price}
                          </Text>
                          <Text>per {item.durationType}</Text>
                        </View>
                        <SubmitBtn
                          btnText={'Subscribe'}
                          width={width * 0.7}
                          color={'#0347A1'}
                          textColor={'#ffffff'}
                          borderRadius={width * 0.15}
                          topMargin={0.05 * height}
                          action={() => {
                            handleSubscribe(item);
                          }}
                        />
                      </View>
                    );
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </ScrollView>
            <OverlayComponent
              mode={[modalVisible, setModalVisible]}
              data={payDetails}
            />
            <AlertCurtain mode={[promptVisible, setPromptVisible]} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default SubscribeAndPay;
