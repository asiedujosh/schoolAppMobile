import styles from '../globalStyles/Styles';
import {View, Text} from 'react-native';

const LoadingBtn = () => {
  return (
    <View style={styles.loadingBtn}>
      <Text style={styles.loadingBtnText}>Loading...</Text>
    </View>
  );
};

export default LoadingBtn;
