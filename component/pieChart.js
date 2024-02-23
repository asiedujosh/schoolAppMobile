// import {useState, useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../globalStyles/Styles';
import PieChart from 'react-native-pie-chart';

const PieChartView = ({pieData}) => {
  let colors = ['#2C72D2', '#042046'];
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
          <View
            style={[
              styles.colorCode,
              {backgroundColor: colors[1]},
              {marginLeft: '5%'},
            ]}></View>
          <Text style={styles.recordInfoTextTitle}>Total Marks</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.colorCode,
              {backgroundColor: colors[0]},
              {marginLeft: '5%'},
            ]}></View>
          <Text style={styles.recordInfoTextTitle}>Correct Marks</Text>
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
