import {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {RecordApiData} from '../contextApi/records/recordsContextApi.js';
import styles from '../globalStyles/Styles';
import Marks from '../utils/marksNo.js';
import PageBackBtn from '../component/backPageBtn.js';
import PieChartView from '../component/pieChart.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import AnalysisCard from '../component/analysisCard.js';

const OralAnalysis = ({navigation}) => {
  const {userProfile} = useContext(AuthApiData);
  const {processGetOralUserRecords, oralSavedRecords, setReviewId} =
    useContext(RecordApiData);

  useEffect(() => {
    processGetOralUserRecords({userId: userProfile.username});
  }, []);

  const goToMoreDetails = item => {
    navigation.navigate('OralAnalysisDetail', {data: item});
  };

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
              <Text style={[styles.dashboardHeadTitle]}>Analysis</Text>
              <View style={[styles.homeBtnWrapper, {marginLeft: -25}]}>
                <PageBackBtn navigation={navigation} />
              </View>
            </View>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              {oralSavedRecords &&
                oralSavedRecords.records &&
                oralSavedRecords.records.length <= 0 && (
                  <View className="" style={{marginTop: '20%'}}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>
                      No Data Available
                    </Text>
                  </View>
                )}
              {oralSavedRecords ? (
                <FlatList
                  data={oralSavedRecords.records}
                  pagingEnabled
                  numColumns={1}
                  snapToAlignment="center"
                  scrollEventThrottle={16}
                  decelerationRate={'fast'}
                  renderItem={({item}) => {
                    return (
                      <View style={[styles.analysisCard, {marginBottom: '5%'}]}>
                        <View className="analysisContainerOne">
                          <Text style={styles.recordInfoTextTitle}>
                            {item.examsType.toUpperCase()}
                          </Text>
                          <Text style={styles.recordInfoText}>
                            {item.subject.toUpperCase()}
                          </Text>
                          <Text style={styles.recordInfoText}>{item.year}</Text>
                        </View>
                        <PieChartView
                          pieData={[
                            Marks(item.quizId, oralSavedRecords.marks, 'Ans'),
                            Marks(
                              item.quizId,
                              oralSavedRecords.marks,
                              'Questions',
                            ),
                          ]}
                        />
                        <View>
                          <Text style={styles.recordInfoTextTitle}>Score </Text>
                          <Text style={styles.recordInfoText}>
                            {Marks(item.quizId, oralSavedRecords.marks, 'Ans')}{' '}
                            Out of{' '}
                            {Marks(
                              item.quizId,
                              oralSavedRecords.marks,
                              'Questions',
                            )}
                          </Text>
                          <Text style={styles.recordInfoText}>
                            {' '}
                            {Math.ceil(
                              (Marks(
                                item.quizId,
                                oralSavedRecords.marks,
                                'Ans',
                              ) /
                                Marks(
                                  item.quizId,
                                  oralSavedRecords.marks,
                                  'Questions',
                                )) *
                                100,
                            )}
                            %
                          </Text>
                        </View>
                        <Pressable
                          style={[styles.recordCardBtn, {marginTop: '5%'}]}
                          onPress={() => {
                            goToMoreDetails(item.quizId);
                            // goToRecordReview(item.quizId);
                          }}>
                          <Text style={styles.recordCardBtnText}>
                            View Details
                          </Text>
                        </Pressable>
                      </View>
                    );
                  }}
                />
              ) : (
                <View style={[styles.recordCardContainer, {marginTop: '20%'}]}>
                  <ActivityIndicator size="large" color="#FFFFFF" />
                </View>
              )}
              {oralSavedRecords && !oralSavedRecords.records && (
                <View style={[styles.recordCardContainer, {marginTop: '20%'}]}>
                  <Text style={styles.recordInfoTextTitle}>
                    No Data Available
                  </Text>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default OralAnalysis;
