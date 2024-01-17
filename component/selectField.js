import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from '../globalStyles/Styles';

const SelectField = ({title, top, option, change, width, field}) => {
  const handleChanges = value => {
    change[3]({...change[2], [field]: value});
  };

  return (
    <View style={{marginTop: top}}>
      <Text style={styles.textLabel}>{title}</Text>
      <View style={[styles.textInput, {width: width && width}]}>
        <Picker
          selectedValue={change[2][field]}
          onValueChange={(itemValue, itemIndex) => handleChanges(itemValue)}
          style={{color: '#ffffff'}}>
          {option &&
            option.map((item, index) => (
              <Picker.Item key={index} label={item} value={item} />
            ))}
        </Picker>
      </View>
    </View>
  );
};

export default SelectField;
