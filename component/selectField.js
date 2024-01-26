import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from '../globalStyles/Styles';

const SelectField = ({title, top, option, change, width, field}) => {
  const handleChanges = value => {
    change[3]({...change[2], [field]: value});
  };

  return (
    <View style={{marginTop: top}}>
      <View
        style={[
          styles.textInput,
          styles.ignorePadding,
          {width: width && width},
        ]}>
        <Picker
          selectedValue={change[2][field]}
          onValueChange={(itemValue, itemIndex) => handleChanges(itemValue)}
          dropdownIconColor={'#ffffff'}
          style={{color: '#ffffff', fontSize: 20}}>
          {option &&
            option.map((item, index) => (
              <Picker.Item
                key={index}
                label={item}
                value={item}
                style={{fontSize: 20}}
              />
            ))}
        </Picker>
      </View>
    </View>
  );
};

export default SelectField;
