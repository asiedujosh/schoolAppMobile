import {Image, Text, View, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../globalStyles/Styles';
import GetStarted from '../component/getStarted';
import SignUp from '../component/signUp';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require('../assets/img/student.jpg')} // Replace with the actual path to your image
          style={styles.image}
        />
      </View>
      <View style={styles.homeCard}>
        {/** <GetStarted /> **/}
        <SignUp />
      </View>
    </SafeAreaView>
  );
};

export default Home;
