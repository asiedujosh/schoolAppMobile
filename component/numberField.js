import {Text, View, TextInput} from 'react-native';
import styles from '../globalStyles/Styles';

const NumberField = ({title, top, value, change, field}) => {
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
        keyboardType="numeric"
        onChangeText={value => {
          handleInputChange(value);
        }}
      />
    </View>
  );
};

export default NumberField;
