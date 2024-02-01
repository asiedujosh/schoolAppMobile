import {Pressable} from 'react-native';
import styles from '../globalStyles/Styles';
import Icon from 'react-native-vector-icons/Feather';

const BackBtn = ({change}) => {
  let goBack = () => {
    let i = change[0] - 1;
    change[1](i);
  };

  return (
    <Pressable
    style={({pressed}) => [
      {backgroundColor: pressed ? 'lightblue' : '#EBEBEC'},
      styles.buttonCircle, styles.homeBtnTwo
    ]}
      onPress={goBack}>
      <Icon name="arrow-left" size={25} color="#0347A1" />
    </Pressable>
  );
};

export default BackBtn;
