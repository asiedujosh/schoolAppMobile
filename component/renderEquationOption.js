import {useState, useRef, useEffect, useContext} from 'react';
import styles from '../globalStyles/Styles';
import {Pressable} from 'react-native';
import AsciiOutput from '../screens/asciiHtml.js';

const RenderEquationOptions = ({
  data,
  highlight,
  currentQuestion,
  ansHighLight,
}) => {
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
              item === ansHighLight[currentQuestion] ? '#0797F8' : '#0347A1',
          },
        ]}>
        <AsciiOutput data={item} />
      </Pressable>
    ))
  );
};

export default RenderEquationOptions;
