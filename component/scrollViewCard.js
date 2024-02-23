import {Pressable, View, Image, Text} from 'react-native';
import styles from '../globalStyles/Styles';
import Icon from 'react-native-vector-icons/Feather';

const ScrollViewCard = ({data, navigation}) => {
  const goToYearList = item => {
    navigation.navigate('YearList', {data: item});
  };

  return (
    <Pressable
      onPress={() => {
        goToYearList(data.id);
      }}
      style={({pressed}) => [
        styles.scrollViewCard,
        {backgroundColor: pressed ? 'lightblue' : '#ffffff'},
      ]}>
      <Image
        source={{uri: `${data.examImage}`}}
        style={styles.scrollViewCardImage}
      />
      <Text style={styles.scrollViewCardText}>{data.exam}</Text>
    </Pressable>
  );
};

export default ScrollViewCard;
