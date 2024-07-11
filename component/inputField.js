import {Text, View, TextInput, Dimensions} from 'react-native';
import styles from '../globalStyles/Styles';

// const {width, height} = Dimensions.get('window');

const InputField = ({
  title,
  top,
  value,
  change,
  width,
  field,
  err,
  editable,
}) => {
  const handleInputChange = value => {
    change(value, field);
  };

  console.log(editable);

  return (
    <View style={{marginTop: top}}>
      <TextInput
        style={[styles.textInput, {width: width && width}]}
        placeholder={title}
        placeholderTextColor="white"
        selectionColor="white"
        editable={editable}
        secureTextEntry={
          field == 'password' ||
          field == 'confirmPassword' ||
          field == 'oldPassword' ||
          field == 'newPassword'
            ? true
            : false
        }
        onChangeText={value => {
          handleInputChange(value);
        }}
      />
      {err && err[0] && err[0].errName === field && (
        <Text style={styles.errMsg}>{err[0].errMsg}</Text>
      )}
    </View>
  );
};

export default InputField;
