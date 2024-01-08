import {Text, View, TextInput} from 'react-native';
import styles from '../globalStyles/Styles';

const InputField = ({title, top, value, change, field}) => {
  const handleInputChange = value => {
    change(value, field);
  };

  return (
    <View style={{marginTop: top}}>
      <Text style={styles.textLabel}>{title}</Text>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="white"
        selectionColor="white"
        secureTextEntry={
          field == 'password' || field == 'confirmPassword' ? true : false
        }
        onChangeText={value => {
          handleInputChange(value);
        }}
      />
    </View>
  );
};

export default InputField;
