import React from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

const OutputQuestion = ({data}) => {
  const {width} = useWindowDimensions();

  const source = {
    html: data,
  };

  return (
    <RenderHtml
      contentWidth={width * 0.6}
      source={source}
      baseStyle={{color: 'white', textAlign: 'center', fontSize: 21}}
    />
  );
};

export default OutputQuestion;
