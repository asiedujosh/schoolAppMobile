import {useContext} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import styles from '../globalStyles/Styles';
import {ExamSubjectApiData} from '../contextApi/examSubjectRelation/examSubjectRelationContextApi.js';
import PageBackBtn from '../component/backPageBtn.js';
import NoDataAvailable from '../component/noDataComponent.js';

const Free = ({navigation}) => {
  const {examSubjectList} = useContext(ExamSubjectApiData);

  //Get the free examList from examSubjectList
  let freeSubscription = examSubjectList.filter(
    item => item.offerType == 'offerType',
  );

  return (
    <View
      style={[
        styles.quizOptionLead,
        styles.gameboardTwoContainer,
        styles.gameBoard,
      ]}>
      <View style={styles.quizOptionContainer}>
        <View
          style={[
            styles.dashboardHeadCard,
            styles.reviewCardTwo,
            styles.settingHeadCard,
          ]}>
          <View style={styles.dashboardHeadFAQ}>
            <Text style={[styles.dashboardHeadTitle]}>Free</Text>
            <View style={styles.homeBtnWrapper}>
              <PageBackBtn navigation={navigation} />
            </View>
          </View>
        </View>

        <View style={styles.scrollContainer}>
          <ScrollView style={{flex: 1}}>
            <View style={{marginBottom: '15%'}}>
              <FlatList
                data={freeSubscription}
                pagingEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate={'fast'}
                renderItem={({item}) => {
                  return (
                    <View style={[styles.subscribeCardContainer]} key={item.id}>
                      <Text
                        style={[styles.homeBodyText, styles.subscribeTitle]}>
                        {item.examSubjectId}
                      </Text>
                      <View
                        style={[styles.subscribeSubContainer, {marginTop: 15}]}>
                        <Text style={styles.subscribeSubDate}>
                          {`${item.examTime} Minutes Test Time`}
                        </Text>
                      </View>
                    </View>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <NoDataAvailable data={freeSubscription} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Free;
