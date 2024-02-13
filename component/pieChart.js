// import {useState, useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../globalStyles/Styles';
import PieChart from 'react-native-pie-chart';

const PieChartView = ({pieData}) => {
  let colors = [
    '#FF5733',
    '#FFC300',
    '#FFD700',
    '#F4D03F',
    '#F7DC6F',
    '#F4D03F',
    '#F4D03F',
    '#AED6F1',
    '#5DADE2',
    '#48C9B0',
    '#58D68D',
    '#82E0AA',
    '#F1948A',
    '#EC7063',
    '#E74C3C',
    '#CD6155',
    '#D98880',
    '#BB8FCE',
    '#A569BD',
    '#8E44AD',
  ];
  let brandColors = [];
  let figures = [];

  let i = 0;
  for (i = 0; i < pieData.length; i++) {
    figures.push(pieData[i]);
    brandColors.push(colors[i]);
  }
  const widthAndHeight = 250;
  const series = figures;
  const sliceColor = brandColors;
  const coverFill = null;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: '5%',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text>Total Marks</Text>
          <View
            style={[
              styles.colorCode,
              {backgroundColor: colors[1]},
              {marginLeft: '5%'},
            ]}></View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Correct Marks</Text>
          <View
            style={[
              styles.colorCode,
              {backgroundColor: colors[0]},
              {marginLeft: '5%'},
            ]}></View>
        </View>
      </View>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
      />
      <View></View>
    </View>
  );
};

export default PieChartView;
