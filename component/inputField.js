import {Text, View, TextInput} from 'react-native';
import {START} from '../constant/homeConstant';
import styles from '../globalStyles/Styles';

const InputField = ({title}) => {
  return (
    <View style={{marginTop: '2%'}}>
      <Text style={{fontSize: 12, color: '#ba8d6e', marginBottom: 5}}>
        {title}
      </Text>
      <TextInput
        style={{
          width: 300,
          height: 45,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: '#ba8d6e',
          color: '#000000',
          fontSize: 14,
          paddingLeft: 15,
        }}
        placeholder="Brand Name"
      />
    </View>
  );
};

export default InputField;
