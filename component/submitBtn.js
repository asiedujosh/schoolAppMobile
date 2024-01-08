import styles from '../globalStyles/Styles';
import {Text, Pressable} from 'react-native';

const SubmitBtn = ({btnText, action}) => {
  const handleAction = () => {
    action();
  };

  return (
    <Pressable
      style={({pressed}) => [
        styles.homeBtn,
        {backgroundColor: pressed ? '#EFA7EB' : '#D268CC'},
      ]}
      onPress={handleAction}>
      <Text style={styles.homeBtnText}>{btnText}</Text>
    </Pressable>
  );
};

export default SubmitBtn;
