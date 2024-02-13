import {Pressable, View, Image, Text} from 'react-native';
import styles from '../globalStyles/Styles';
import Icon from 'react-native-vector-icons/Feather';

const ScrollViewCard = ({data}) => {
  return (
    <View style={styles.scrollViewCard}>
      <Image
        source={{uri: `${data.examImage}`}}
        style={styles.scrollViewCardImage}
      />
      <Text style={styles.scrollViewCardText}>{data.exam}</Text>
    </View>
  );
};

export default ScrollViewCard;
