import {Text, View, Pressable} from 'react-native';
import {SIGNUP} from '../constant/homeConstant';
import InputField from './inputField';
import styles from '../globalStyles/Styles';

const SignUp = () => {
  return (
    <View>
      <View style={styles.homeHeadTextContainer}>
        <Text style={styles.textTitle}>{SIGNUP.title}</Text>
      </View>
      <View style={styles.homeBodyTextContainer}>
        {SIGNUP.field.map(item => (
          <InputField title={item.label} />
        ))}
      </View>
      <View style={styles.homeBtnContainer}>
        <Pressable
          style={({pressed}) => [
            styles.homeBtn,
            {backgroundColor: pressed ? '#EFA7EB' : '#D268CC'},
          ]}
          onPress={console.log('Was pressed')}>
          <Text style={styles.homeBtnText}>{SIGNUP.btnText[0]}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
