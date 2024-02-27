import {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  ImageBackground,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from '../globalStyles/Styles';
import dateFormat from '../utils/dateFormat.js';
import HomeBtn from '../component/homeBtn.js';
import Marks from '../utils/marksNo.js';
import {STATUSOPTION} from '../constant/reviewConstant';
import SelectField from '../component/selectField';
import SubmitBtn from '../component/submitBtn';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {RecordApiData} from '../contextApi/records/recordsContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const Records = ({navigation}) => {
  const {userProfile} = useContext(AuthApiData);
  const {
    processGetUserRecords,
    savedRecords,
    setReviewId,
    processDeleteRecord,
  } = useContext(RecordApiData);
  const [reviewOption, setReviewOption] = useState({
    reviewOption: STATUSOPTION.selectOptions.options[0],
  });
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    processGetUserRecords({userId: userProfile.username});
  }, []);

  // useEffect(() => {
  //   console.log(savedRecords);
  // }, [savedRecords]);

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard');
  };

  const goToRecordReview = item => {
    setReviewId(item);
    navigation.navigate('RecordView');
  };

  const alertToDeleteRecord = item => {
    Alert.alert(
      'Delete Record',
      'Are you sure you want to delete record?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'OK', onPress: () => processDeleteRecord(item)},
      ],
      {cancelable: false},
    );
  };

  return (
    <ImageBackground
      source={require('../assets/img/record.jpg')} // Replace with your image path
      style={styles.recordBackgroundImage}>
      <View style={styles.recordOverlay}>
        <View style={[styles.dashboardHeadCard, styles.recordCardTwo]}>
          <View style={styles.reviewSearchContainer}>
            <View style={styles.searchWrapper}>
              <SelectField
                title={'Home'}
                field={'Home'}
                top={'0%'}
                option={['All', 'Correct', 'Wrongs']}
                change={[
                  selectedValue,
                  setSelectedValue,
                  reviewOption,
                  setReviewOption,
                ]}
              />
            </View>
            <View style={styles.homeBtnWrapper}>
              <HomeBtn handleHome={handleHomeBtn} />
            </View>
          </View>
        </View>
        <View style={[styles.recordBody]}>
          <ScrollView style={{flex: 1}}>
            <View style={styles.recordCardContainer}>
              {savedRecords ? (
                <FlatList
                  data={savedRecords.records}
                  keyExtractor={(item, index) => 'key' + item.id}
                  pagingEnabled
                  numColumns={1}
                  snapToAlignment="center"
                  scrollEventThrottle={16}
                  decelerationRate={'fast'}
                  renderItem={({item}) => {
                    return (
                      <View style={styles.viewRecordCard}>
                        <View style={styles.recordCardTextContainer}>
                          <View style={styles.recordInfoCard}>
                            <Text style={styles.recordInfoTextTitle}>
                              {item.examsType.toUpperCase()}{' '}
                              {item.subject.toUpperCase()}
                            </Text>
                            <Text style={styles.recordInfoTextTitle}>
                              {item.year}
                            </Text>
                            <Text style={styles.recordInfoText}>
                              {dateFormat(item.updated_at)}
                            </Text>
                          </View>
                          <View style={{marginTop: '5%'}}>
                            <Text style={styles.recordInfoTextTitle}>
                              SCORE
                            </Text>
                            <Text style={styles.recordInfoText}>
                              {Marks(item.quizId, savedRecords.marks, 'Ans')}{' '}
                              Out of{' '}
                              {Marks(
                                item.quizId,
                                savedRecords.marks,
                                'Questions',
                              )}
                            </Text>
                          </View>
                          <View style={{marginTop: '7%'}}>
                            <Pressable
                              style={styles.recordCardBtn}
                              onPress={() => {
                                goToRecordReview(item.quizId);
                              }}>
                              <Text style={styles.recordCardBtnText}>
                                {item.status}
                              </Text>
                            </Pressable>

                            <Pressable
                              style={[
                                styles.recordCardBtn,
                                {backgroundColor: '#CF0707', marginTop: '2%'},
                              ]}
                              onPress={() => {
                                alertToDeleteRecord({
                                  data: item.quizId,
                                  userId: userProfile.username,
                                });
                                // goToRecordReview(item.quizId);
                              }}>
                              <Text style={styles.recordCardBtnText}>
                                Delete
                              </Text>
                            </Pressable>
                          </View>
                        </View>
                      </View>
                    );
                  }}
                />
              ) : (
                <View style={[styles.recordCardContainer, {marginTop: '20%'}]}>
                  <ActivityIndicator size="large" color="#FFFFFF" />
                </View>
              )}
              {savedRecords && !savedRecords.records && (
                <View style={[styles.recordCardContainer, {marginTop: '20%'}]}>
                  <Text style={styles.recordInfoTextTitle}>
                    No Data Available
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Records;
