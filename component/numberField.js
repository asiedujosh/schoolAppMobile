import {Text, View, TextInput} from 'react-native';
import styles from '../globalStyles/Styles';

const NumberField = ({title, top, value, width, change, field}) => {
  const handleInputChange = value => {
    change(value, field);
  };

  return (
    <View style={{marginTop: top}}>
      <TextInput
        style={[styles.textInput, {width: width && width}]}
        placeholderTextColor="white"
        placeholder={title}
        selectionColor="white"
        keyboardType="numeric"
        onChangeText={value => {
          handleInputChange(value);
        }}
      />
    </View>
  );
};

export default NumberField;
