import {useState, useRef, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import styles from '../globalStyles/Styles';
// import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const ReviewImageOptions = ({imgData, dataInfo, checkColor}) => {
  return (
    <View>
      <FlatList
        data={imgData.split('**')}
        pagingEnabled
        numColumns={2}
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        renderItem={({item}) => {
          return (
            <View
              onPress={() => {
                highlight(item);
              }}>
              <View
                style={[
                  styles.scrollViewCard,
                  {
                    backgroundColor: checkColor(
                      imgData,
                      dataInfo[0],
                      dataInfo[1],
                      item,
                    ),
                    padding: 5,
                    width: 100,
                    height: 100,
                  },
                ]}>
                <Image
                  source={{uri: `${item}`}} // Replace with the actual path to your image
                  style={[
                    styles.scrollViewCardImage,
                    {width: 90, height: 90, resizeMode: 'contain'},
                  ]}
                />
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ReviewImageOptions;
