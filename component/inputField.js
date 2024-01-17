import {Text, View, TextInput} from 'react-native';
import styles from '../globalStyles/Styles';

const InputField = ({title, top, value, change, width, field, err}) => {
  const handleInputChange = value => {
    change(value, field);
  };

  return (
    <View style={{marginTop: top}}>
      <Text style={styles.textLabel}>{title}</Text>
      <TextInput
        style={[styles.textInput, {width: width && width}]}
        placeholderTextColor="white"
        selectionColor="white"
        secureTextEntry={
          field == 'password' || field == 'confirmPassword' ? true : false
        }
        onChangeText={value => {
          handleInputChange(value);
        }}
      />
      {err && err[0].errName === field && (
        <Text style={styles.errMsg}>{err[0].errMsg}</Text>
      )}
    </View>
  );
};

export default InputField;
