import React, {useEffect} from 'react';
import TrackPlayer from 'react-native-track-player';
import styles from '../globalStyles/Styles';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  Image,
} from 'react-native';

const AudioQuestion = ({tracks}) => {
  const data = [
    {
      id: 1,
      url: tracks,
      title: 'Orals',
    },
  ];

  const setUpTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    TrackPlayer.updateOptions({
      stopWithApp: false,
      capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
    setUpTrackPlayer();
    return () => TrackPlayer.destroy();
  }, []);

  return (
    <>
      <View></View>
      <View style={styles.audioContainer}>
        <Pressable
          onPress={() => TrackPlayer.play()}
          style={({pressed}) => [
            styles.optionItemContainer,
            {
              backgroundColor: pressed ? '#0797F8' : '#3DA6F8',
              marginHorizontal: '10px',
            },
          ]}>
          <Text style={[styles.optionItem, styles.audioOptionItem]}>Play</Text>
        </Pressable>
        <Pressable
          onPress={() => TrackPlayer.pause()}
          style={({pressed}) => [
            styles.optionItemContainer,
            {
              backgroundColor: pressed ? '#0797F8' : '#3DA6F8',
              marginHorizontal: '10px',
            },
          ]}>
          <Text style={[styles.optionItem, styles.audioOptionItem]}>Pause</Text>
        </Pressable>
      </View>
    </>
  );
};

export default AudioQuestion;
