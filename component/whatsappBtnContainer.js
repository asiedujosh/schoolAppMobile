import React, {useContext, useEffect, useState} from 'react';
import styles from '../globalStyles/Styles';
import {Pressable, Text, View, Linking} from 'react-native';

const WhatsappBtnContainer = ({navigation}) => {
  const goToWhatsApp = () => {
    navigation.navigate('SendMessage');
  };

  return (
    <View style={[styles.recordOverlay, styles.floatBtnContainer]}>
      <Pressable
        onPress={goToWhatsApp}
        style={({pressed}) => [
          styles.buttonContainer3,
          styles.whatsappBtn,
          {backgroundColor: pressed ? '#7FFF7F' : 'green'},
        ]}>
        <Text style={styles.buttonContainer2Text}>Need Help?</Text>
      </Pressable>
    </View>
  );
};

export default WhatsappBtnContainer;
