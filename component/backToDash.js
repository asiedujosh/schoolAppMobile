import {Pressable, View, Text} from 'react-native';

const BackToDash = ({navigation}) => {
  let goBack = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <Pressable onPress={goBack}>
      <Text style={{color: '#fff'}}>Go Home</Text>
    </Pressable>
  );
};

export default BackToDash;
