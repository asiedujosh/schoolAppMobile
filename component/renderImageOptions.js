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

const RenderImageOptions = ({
  data,
  highlight,
  currentQuestion,
  ansHighLight,
}) => {
  return (
    <View>
      <FlatList
        data={data.split('**')}
        pagingEnabled
        numColumns={2}
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => {
                highlight(item);
              }}
              style={({pressed}) => [
                {
                  backgroundColor:
                    item == ansHighLight[currentQuestion]
                      ? '#0797F8'
                      : '#0347A1',
                },
                {
                  borderRadius: width * 0.05,
                  marginTop: 0.02 * height,
                  marginHorizontal: '2%',
                },
              ]}>
              <View
                style={[
                  styles.dashboardCard,
                  {width: width * 0.4, height: width * 0.4},
                ]}>
                <Image
                  source={{uri: `${item}`}} // Replace with the actual path to your image
                  style={[styles.dashboardCardImage, {resizeMode: 'stretch'}]}
                />
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default RenderImageOptions;
