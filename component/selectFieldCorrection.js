import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from '../globalStyles/Styles';

const SelectFieldCorrection = ({top, option, change, width}) => {
  const handleChanges = value => {
    change[1](value);
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
          selectedValue={change[0]}
          onValueChange={(itemValue, itemIndex) => handleChanges(itemValue)}
          dropdownIconColor={'#ffffff'}
          style={[
            {color: '#ffffff'},
            styles.selectText,
            {fontFamily: 'Roboto'},
          ]}>
          {option &&
            option.map((item, index) => (
              <Picker.Item
                key={index}
                label={item}
                value={item}
                style={[styles.selectText, {fontFamily: 'Roboto'}]}
              />
            ))}
        </Picker>
      </View>
    </View>
  );
};

export default SelectFieldCorrection;
