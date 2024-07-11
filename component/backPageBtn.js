import {Pressable} from 'react-native';
import styles from '../globalStyles/Styles';
import Icon from 'react-native-vector-icons/Feather';

const PageBackBtn = ({navigation}) => {
  let goBack = () => {
    navigation.goBack();
  };

  return (
    <Pressable
      style={({pressed}) => [
        {backgroundColor: pressed ? 'lightblue' : '#EBEBEC'},
        styles.buttonCircle,
        styles.homeBtnTwo,
      ]}
      onPress={goBack}>
      <Icon name="arrow-left" size={25} color="#0347A1" />
    </Pressable>
  );
};

export default PageBackBtn;
