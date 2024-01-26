import styles from '../globalStyles/Styles';
import {View, Image} from 'react-native';

const ResultImage = ({data}) => {
  switch (data) {
    case 'Excellent':
      return (
        <View>
          <Image
            source={require('../assets/img/trophy.jpg')}
            style={styles.resultImage}
          />
        </View>
      );
      break;
    case 'V.Good':
      return (
        <View>
          <Image
            source={require('../assets/img/wellDone.jpg')}
            style={styles.resultImage}
          />
        </View>
      );
      break;
    case 'Credit':
      return (
        <View>
          <Image
            source={require('../assets/img/sadDone.png')}
            style={styles.resultImage}
          />
        </View>
      );
      break;
    case 'Fail':
      return (
        <View>
          <Image
            source={require('../assets/img/fail.png')}
            style={styles.resultImage}
          />
        </View>
      );
    default:
      return (
        <View>
          <Image
            source={require('../assets/img/trophy.jpg')}
            style={styles.resultImage}
          />
        </View>
      );
  }
};

export default ResultImage;
