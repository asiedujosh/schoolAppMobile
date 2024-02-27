import {useState, useRef, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';

import RenderTextOptions from './renderTextOptions';
import RenderEquationOptions from './renderEquationOption';
import RenderImageOptions from './renderImageOptions';

const RenderOptionsContainer = ({
  optionType,
  highlight,
  currentQuestion,
  ansHighLight,
  renderType,
}) => {
  if (optionType[0] !== null && optionType[0] !== '') {
    return (
      <RenderTextOptions
        data={optionType[0]}
        highlight={highlight}
        currentQuestion={currentQuestion}
        ansHighLight={ansHighLight}
      />
    );
  }

  if (optionType[1] !== null && optionType[1] !== '') {
    return (
      <RenderImageOptions
        data={optionType[1]}
        highlight={highlight}
        currentQuestion={currentQuestion}
        ansHighLight={ansHighLight}
      />
    );
  }

  if (optionType[2] !== null && optionType[2] !== '') {
    return (
      <RenderEquationOptions
        data={optionType[2]}
        highlight={highlight}
        currentQuestion={currentQuestion}
        ansHighLight={ansHighLight}
      />
    );
  }
};

export default RenderOptionsContainer;
