import {Text, View} from 'react-native';

const NoDataAvailable = ({data}) => {
  return (
    data?.length == 0 && (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, color: '#ffffff'}}>No data available</Text>
      </View>
    )
  );
};

export default NoDataAvailable;
