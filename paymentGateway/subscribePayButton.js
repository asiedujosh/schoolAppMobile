import React, {useRef, useContext, useEffect} from 'react';
import styles from '../globalStyles/Styles';
import {Paystack} from 'react-native-paystack-webview';
import loadingBtn from '../component/loadingBtn.js';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {PackageApiData} from '../contextApi/package/packageContextApi.js';
import {View, TouchableOpacity, Text, Button, Pressable} from 'react-native';
import LoadingBtn from '../component/loadingBtn.js';

const SubscribePayBtn = ({data}) => {
  const {userProfile} = useContext(AuthApiData);
  const {processSubscribeToPackage, loading, setLoading} =
    useContext(PackageApiData);
  const paystackWebViewRef = useRef();

  return (
    <View>
      <Paystack
        paystackKey={process.env.PAYSTACK_TEST_KEY}
        billingEmail={
          userProfile ? userProfile.email : 'info.paystack@gmail.com'
        }
        amount={data ? data.price : '10'}
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
            try {
              processSubscribeToPackage({
                userId: userProfile && userProfile.id,
                examSubjectId: data.examSubjectId,
                durationType: data.durationType,
                amount: data.price,
              });
              setLoading(prev => !prev);
              // console.log('Data transfer success');
            } catch (err) {
              console.log(err);
            }
          }
        }}
        ref={paystackWebViewRef}
      />
      <View>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#0347A1' : '#2196F3',
              paddingHorizontal: 20,
              paddingVertical: 10,
            },
          ]}
          onPress={() => {
            setLoading(prev => !prev);
            paystackWebViewRef.current.startTransaction();
          }}>
          <Text style={{color: '#ffffff', fontSize: 18}}>Pay</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SubscribePayBtn;
