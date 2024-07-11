import React, {useState} from 'react';
import styles from '../globalStyles/Styles';
import {truncateText} from '../utils/truncateText';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function StoreAccordionItem({children, title, year}) {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  const body = <View>{children}</View>;

  return (
    <View style={[styles.accordContainer]}>
      <TouchableOpacity
        style={[
          styles.accordHeader,
          {
            backgroundColor: year ? '#dedede' : '#ffffff',
            marginTop: year ? '2%' : '0%',
            width: year ? '85%' : '96%',
          },
        ]}
        onPress={toggleItem}>
        <Text style={styles.accordTitle}>{truncateText(title, 20)}</Text>
        <Icon
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={20}
          color="#0347A1"
        />
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
}

export default StoreAccordionItem;
