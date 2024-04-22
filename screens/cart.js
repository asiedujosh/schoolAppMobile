import {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import styles from '../globalStyles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {StoreApiData} from '../contextApi/store/storeContextApi';
import MakePayment from '../paymentGateway/paystackView.js';
import CartList from '../component/cartList.js';
import HomeBtn from '../component/homeBtn.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const Cart = ({navigation}) => {
  const {examsList} = useContext(QuestionApiData);
  const {setStore, store, cart, setCart, purchaseStatus, setPurchaseStatus} =
    useContext(StoreApiData);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    try {
      let total = 0;
      if (cart.length > 0) {
        total = cart.reduce(
          (acc, item) => item && parseInt(acc) + parseInt(item.price),
          0,
        );
      }
      setTotalAmount(total);
    } catch (err) {
      console.log(err);
    }
  }, [cart]);

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard');
  };

  useEffect(() => {
    purchaseStatus && navigation.navigate('purchaseCongrats');
  }, [purchaseStatus]);

  // let handleHomeBtn = () => {
  //   navigation.navigate('salesShop');
  // };

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
              <Text style={[styles.dashboardHeadTitle]}>{'Cart'}</Text>
              <View style={styles.homeBtnWrapper}>
                <HomeBtn handleHome={handleHomeBtn} />
              </View>
            </View>
          </View>
          <View>
            <Text style={[styles.reviewCardHeadTitle, {color: '#fff'}]}>
              Total GHS {totalAmount}
            </Text>
          </View>
          <View style={{justifyContent: 'space-between', height: 50}}>
            <MakePayment data={{premium: false, amount: totalAmount}} />
          </View>

          <View style={styles.scrollContainer}>
            <View style={{marginTop: '20%', alignItems: 'center'}}>
              <Text style={[styles.reviewCardHeadTitle, {color: '#fff'}]}>
                Products
              </Text>
            </View>
            <ScrollView style={{flex: 1}}>
              <FlatList
                data={cart}
                pagingEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate={'fast'}
                renderItem={({item}) => {
                  return (
                    <View>
                      <CartList data={item} />
                    </View>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default Cart;
