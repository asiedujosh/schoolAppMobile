import {useState, useRef, useEffect, useContext} from 'react';
import styles from '../globalStyles/Styles';
import {View, FlatList} from 'react-native';
import AsciiOutput from '../screens/asciiHtml.js';

const ReviewEquationOptions = ({data, dataInfo, checkColor}) => {
  return (
    // Enclose the JSX elements inside the return statement
    <FlatList
      data={data.split('**')}
      pagingEnabled
      numColumns={1}
      renderItem={({item}) => {
        return (
          <View
            style={[
              {
                backgroundColor: checkColor(
                  data,
                  dataInfo[0],
                  dataInfo[1],
                  item,
                ),
              },
              styles.reviewOptionsItemContainer,
            ]}>
            <AsciiOutput data={item} />
          </View>
        );
      }}
    />
  );
};

export default ReviewEquationOptions;
