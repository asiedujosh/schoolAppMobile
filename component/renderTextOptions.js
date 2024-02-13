import {useState, useRef, useEffect, useContext} from 'react';
import styles from '../globalStyles/Styles';
import {Text, Pressable} from 'react-native';

const RenderTextOptions = ({
  data,
  highlight,
  currentQuestion,
  ansHighLight,
}) => {
  console.log(currentQuestion);
  return (
    // Enclose the JSX elements inside the return statement
    data.split('**').map((item, index) => (
      <Pressable
        key={index}
        onPress={() => {
          highlight(item);
        }}
        style={({pressed}) => [
          styles.optionItemContainer2,
          {
            backgroundColor:
              item == ansHighLight[currentQuestion] ? '#0797F8' : '#0347A1',
          },
        ]}>
        <Text style={styles.optionItem2}>{item}</Text>
      </Pressable>
    ))
  );
};

export default RenderTextOptions;
