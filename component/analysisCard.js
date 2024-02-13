import {useState, useContext, useEffect} from 'react';
import {Text, View, ScrollView, Pressable, FlatList} from 'react-native';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {RecordApiData} from '../contextApi/records/recordsContextApi.js';
import positionMap from '../utils/positionMap.js';
import AnalysisData from '../utils/analysisData.js';
import styles from '../globalStyles/Styles';
import PieChart from 'react-native-pie-chart';

const AnalysisCard = ({data}) => {
  const [topicAnalysis, setTopicAnalysis] = useState([]);
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00'];
  const coverFill = null;

  let newArr = [];

  let newInfo = AnalysisData(data);
  //   return newInfo;
  console.log(newInfo);
  //   newArr.push(newInfo);
  //   console.log(newArr);
  //setTopicAnalysis([...topicAnalysis, newInfo[0]]);

  return (
    <>
      <View>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
        />
      </View>
      <View style={styles.analysisHeadContainer}>
        <Text style={styles.recordInfoTextTitle}>Topics</Text>
      </View>
      <View>
        {
          newInfo.map(item => {
            return (
              <View style={{marginBottom: '5%'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.analysisTableText}>{item.topic}</Text>
                  <View style={styles.colorCode}></View>
                </View>
                <Text>
                  {item.recurring} out of {item.totalTopic}
                </Text>
                <Text style={styles.analysisTableText}>
                  {Math.ceil((item.recurring / item.totalTopic) * 100)}%
                </Text>
              </View>
            );
          })
          //   <FlatList
          //     data={topicAnalysis}
          //     pagingEnabled
          //     numColumns={1}
          //     snapToAlignment="center"
          //     renderItem={({item}) => {
          //     let newInfo = AnalysisData(data);
          //       return (
          //         <View style={{marginBottom: '5%'}}>
          //           <View style={{flexDirection: 'row', alignItems: 'center'}}>
          //             <Text style={styles.analysisTableText}>{item.topic}</Text>
          //             <View style={styles.colorCode}></View>
          //           </View>
          //           <Text>
          //             {item.recurring} out of {item.totalTopic}
          //           </Text>
          //           <Text style={styles.analysisTableText}>
          //             {Math.ceil((item.recurring / item.totalTopic) * 100)}%
          //           </Text>
          //         </View>
          //       );
          //     }}
          //     keyExtractor={(item, index) => index.toString()}
          //   />
        }
      </View>
    </>
  );
};

export default AnalysisCard;
