import {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import styles from '../globalStyles/Styles';
import dateFormat from '../utils/dateFormat.js';
import Marks from '../utils/marksNo.js';
import {STATUSOPTION} from '../constant/reviewConstant';
import SelectField from '../component/selectField';
import SubmitBtn from '../component/submitBtn';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {RecordApiData} from '../contextApi/records/recordsContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const Records = ({navigation}) => {
  const {userProfile} = useContext(AuthApiData);
  const {processGetUserRecords, savedRecords, setReviewId} = useContext(RecordApiData);
  const [reviewOption, setReviewOption] = useState({
    reviewOption: STATUSOPTION.selectOptions.options[0],
  });
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    processGetUserRecords({userId: userProfile.username});
  }, []);

  let handleHomeBtn = () => {
    console.log('We are going home');
  };

  const goToRecordReview = item => {
    setReviewId(item);
    navigation.navigate('RecordView');
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.gameResultContainer}>
          <View style={styles.reviewSearchContainer}>
            <View style={styles.searchWrapper}>
              <SelectField
                title={STATUSOPTION.selectOptions.label}
                field={STATUSOPTION.selectOptions.name}
                top={'0%'}
                option={STATUSOPTION.selectOptions.options}
                change={[
                  selectedValue,
                  setSelectedValue,
                  reviewOption,
                  setReviewOption,
                ]}
              />
            </View>
            <View style={styles.homeBtnWrapper}>
              <SubmitBtn
                btnText={'Home'}
                width={100}
                borderRadius={30}
                topMargin={'20%'}
                action={handleHomeBtn}
              />
            </View>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              {savedRecords && (
                <FlatList
                  data={savedRecords.records}
                  keyExtractor={(item, index) => 'key' + item.id}
                  pagingEnabled
                  numColumns={2}
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
                        <View style={styles.recordCardContainer}>
                          <Text style={styles.recordCardContainerTitle}>
                            {item.examsType}
                          </Text>
                        </View>
                        <View style={styles.recordCardContainerResult}>
                          <Text style={styles.recordCardMarks}>
                            {Marks(item.quizId, savedRecords.marks, 'Ans')}
                          </Text>
                          <Text style={styles.recordCardInfo}>Out Of</Text>
                          <Text style={styles.recordCardMarks}>
                            {Marks(
                              item.quizId,
                              savedRecords.marks,
                              'Questions',
                            )}
                          </Text>
                        </View>
                        <View style={styles.recordSubjects}>
                          <Text style={styles.subject}>{item.subject}</Text>
                          <Text style={styles.examsDate}>{item.year}</Text>
                        </View>
                        <View>
                          <Text>{dateFormat(item.updated_at)}</Text>
                        </View>
                        <View style={styles.statusContainer}>
                          <Text style={styles.statusText}>{item.status}</Text>
                        </View>
                      </Pressable>
                    );
                  }}
                />
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default Records;
