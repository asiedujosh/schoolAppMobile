import React, {useContext} from 'react';
import {Pressable, View, Image, Text, Alert} from 'react-native';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import styles from '../globalStyles/Styles';
import Icon from 'react-native-vector-icons/Feather';

const ScrollViewCard = ({data, navigation}) => {
  const {isOffline} = useContext(AuthApiData);

  const NetWorkCheck = () => {
    Alert.alert('Network Error', 'Please connect to the internet', [
      {
        text: 'Ok',
        onPress: () => null,
        style: 'cancel',
      },
    ]);
  };

  const goToYearList = item => {
    if (!isOffline) {
      NetWorkCheck();
    } else {
      navigation.navigate('YearList', {data: item});
    }
  };

  return (
    <Pressable
      onPress={() => {
        goToYearList(data.id);
      }}
      style={({pressed}) => [
        styles.scrollViewCard,
        {backgroundColor: pressed ? 'lightblue' : '#ffffff'},
      ]}>
      <Image
        source={{uri: `${data.examImage}`}}
        style={styles.scrollViewCardImage}
      />
      <View style={styles.scrollViewCardTextContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.scrollViewCardText}>
          {data.exam}
        </Text>
      </View>
    </Pressable>
  );
};

export default ScrollViewCard;
