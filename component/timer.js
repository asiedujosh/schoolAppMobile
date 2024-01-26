import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';

function CountdownTimer({seconds}) {
  const showTimerRef = useRef(seconds);
  const intervalIdRef = useRef(null);

  const updateAndCheck = () => {
    if (showTimerRef.current <= 0) {
      console.log('Time is up!');
      clearInterval(intervalIdRef.current);
    } else {
      console.log(showTimerRef.current);
      showTimerRef.current--;
    }
  };

  useEffect(() => {
    intervalIdRef.current = setInterval(updateAndCheck, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalIdRef.current);
  }, []);

  return (
    <View>
      <Text>Time remaining: {showTimerRef.current} seconds</Text>
    </View>
  );
}

export default CountdownTimer;
