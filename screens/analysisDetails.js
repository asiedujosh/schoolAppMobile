import {Text, View, ScrollView, FlatList} from 'react-native';
import styles from '../globalStyles/Styles';
import HomeBtn from '../component/homeBtn.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import AnalysisData from '../utils/analysisData.js';
import {useRoute} from '@react-navigation/native';

const AnalysisDetails = ({navigation}) => {
  const route = useRoute();
  const receivedData = route.params?.data;

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard');
  };

  let postInfo = AnalysisData(receivedData);
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
              <Text style={[styles.dashboardHeadTitle]}>Details</Text>
              <View style={styles.homeBtnWrapper}>
                <HomeBtn handleHome={handleHomeBtn} />
              </View>
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
                            <Text style={styles.recordInfoTextTitle}>
                              {item.topic}
                            </Text>
                          </View>
                          <Text style={styles.recordInfoText}>
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
