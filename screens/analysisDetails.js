import {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {RecordApiData} from '../contextApi/records/recordsContextApi.js';
import styles from '../globalStyles/Styles';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import AnalysisCard from '../component/analysisCard.js';
import AnalysisData from '../utils/analysisData.js';
import {useRoute} from '@react-navigation/native';

const AnalysisDetails = ({navigation}) => {
  const route = useRoute();
  const receivedData = route.params?.data;
  const {processGetRecordReview, recordReviewDetail} =
    useContext(RecordApiData);
  //   const {processGetQuestions, review} = useContext(QuestionApiData);

  let postInfo = AnalysisData(receivedData);
  console.log(postInfo);

  //Original Verison

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.quizOptionContainer}>
          <View
            style={[
              styles.dashboardHeadCard,
              styles.reviewCardTwo,
              styles.settingHeadCard,
            ]}>
            <View style={styles.dashboardHeadFAQ}>
              <Text style={[styles.dashboardHeadTitle]}>Topic Analysis</Text>
            </View>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              {
                <FlatList
                  data={postInfo}
                  pagingEnabled
                  numColumns={1}
                  snapToAlignment="center"
                  scrollEventThrottle={16}
                  decelerationRate={'fast'}
                  renderItem={({item}) => {
                    return (
                      <View style={[styles.analysisCard, {marginBottom: '5%'}]}>
                        <View style={{marginBottom: '5%'}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Text style={styles.analysisTableText}>
                              {item.topic}
                            </Text>
                            <View style={styles.colorCode}></View>
                          </View>
                          <Text>
                            {item.recurring} out of {item.totalTopic}
                          </Text>
                          <Text style={styles.analysisTableText}>
                            {Math.ceil(
                              (item.recurring / item.totalTopic) * 100,
                            )}
                            %
                          </Text>
                        </View>
                      </View>
                    );
                  }}
                />
              }
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default AnalysisDetails;
