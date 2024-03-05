import React, {useRef, useContext, useEffect} from 'react';
import styles from '../globalStyles/Styles';
import {Paystack} from 'react-native-paystack-webview';
import loadingBtn from '../component/loadingBtn.js';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {PackageApiData} from '../contextApi/package/packageContextApi.js';
import {StoreApiData} from '../contextApi/store/storeContextApi.js';
import {View, TouchableOpacity, Text} from 'react-native';
import LoadingBtn from '../component/loadingBtn.js';

const MakePayment = ({data}) => {
  const {userProfile} = useContext(AuthApiData);
  const {processPurchase, cart} = useContext(StoreApiData);
  const {processSubscribe, loading, setLoading} = useContext(PackageApiData);
  const paystackWebViewRef = useRef();

  return (
    <View style={{flex: 1}}>
      <Paystack
        paystackKey={'pk_test_57f2a278d997d17ffe923ca52982cb5240e4446c'}
        billingEmail={
          userProfile ? userProfile.email : 'info.paystack@gmail.com'
        }
        amount={data ? data.amount : '10'}
        currency={'GHS'}
        channels={['card', 'mobile_money']}
        onCancel={e => {
          // handle response here
          setLoading(prev => !prev);
          console.log('we have an error');
        }}
        onSuccess={res => {
          // handle response here
          if (res) {
            data.premium
              ? processSubscribe({
                  id: userProfile && userProfile.id,
                  username: userProfile && userProfile.username,
                  tel: userProfile && userProfile.tel,
                  email: userProfile && userProfile.email,
                  amount: price,
                })
              : processPurchase({
                  userId: userProfile && userProfile.id,
                  data: cart,
                });
            setLoading(prev => !prev);
            // console.log('Data transfer success');
          }
        }}
        ref={paystackWebViewRef}
      />
      <View style={styles.premiumBtnContainer}>
        {!loading ? (
          <TouchableOpacity
            style={[styles.loadingBtn, styles.premiumBtn, styles.paymentBtn]}
            onPress={() => {
              setLoading(prev => !prev);
              paystackWebViewRef.current.startTransaction();
            }}>
            <Text style={styles.loadingBtnText}>Pay Now</Text>
          </TouchableOpacity>
        ) : (
          <LoadingBtn />
        )}
      </View>
    </View>
  );
};

export default MakePayment;
