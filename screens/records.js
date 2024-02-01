import {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  ImageBackground,
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
  const {processGetUserRecords, savedRecords, setReviewId} =
    useContext(RecordApiData);
  const [reviewOption, setReviewOption] = useState({
    reviewOption: STATUSOPTION.selectOptions.options[0],
  });
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    processGetUserRecords({userId: userProfile.username});
  }, []);

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard')
  };

  const goToRecordReview = item => {
    setReviewId(item);
    navigation.navigate('RecordView');
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
              <HomeBtn handleHome = {handleHomeBtn}/>
            </View>
          </View>
        </View>
        <View style={[styles.recordBody]}>
          <ScrollView style={{flex: 1}}>
            <View style={styles.recordCardContainer}>
              {savedRecords && (
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
                      <Pressable
                        style={styles.viewRecordCard}
                        onPress={() => {
                          goToRecordReview(item.quizId);
                        }}>
                        <View>
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
                              <View style={styles.recordCardBtn}>
                                <Text style={styles.recordCardBtnText}>
                                  {item.status}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </Pressable>
                    );
                  }}
                />
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Records;
