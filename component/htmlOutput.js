import React from 'react';
import {useWindowDimensions, ScrollView} from 'react-native';
import HTML from 'react-native-render-html';
import TableRenderer, {
  tableModel,
  computeContainerHeight,
} from '@native-html/table-plugin';
import WebView from 'react-native-webview';

const OutputQuestion = ({data, color, fontSize}) => {
  const {width} = useWindowDimensions();

  const config = {
    WebViewComponent: WebView,
  };

  const html = data;

  const htmlProps = {
    WebView,
    renderers: {
      table: TableRenderer,
    },
    renderersProps: {
      table: {
        // Put the table config here
        computeContainerHeight,
      },
    },
    customHTMLElementModels: {
      table: tableModel,
    },
  };

  return (
    <ScrollView>
      <HTML source={{html}} {...htmlProps} contentWidth={width} />
    </ScrollView>
  );
};

export default OutputQuestion;
