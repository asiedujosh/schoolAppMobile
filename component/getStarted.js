import {Text, View, Pressable} from 'react-native';
import {START} from '../constant/homeConstant';
import styles from '../globalStyles/Styles';

const GetStarted = () => {
  return (
    <View>
      <View style={styles.homeHeadTextContainer}>
        <Text style={styles.textTitle}>{START.title}</Text>
      </View>
      <View style={styles.homeBodyTextContainer}>
        <Text style={styles.homeBodyText}>{START.body}</Text>
      </View>
      <View style={styles.homeBtnContainer}>
        <Pressable
          style={({pressed}) => [
            styles.homeBtn,
            {backgroundColor: pressed ? '#EFA7EB' : '#D268CC'},
          ]}
          onPress={console.log('Was pressed')}>
          <Text style={styles.homeBtnText}>{START.btnText}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GetStarted;
