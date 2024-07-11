import {useContext} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import PageBackBtn from '../component/backPageBtn.js';
import styles from '../globalStyles/Styles';
import ReadDate from '../utils/readDate.js';
import NoDataAvailable from '../component/noDataComponent.js';
import {SubscriptionApiData} from '../contextApi/subscription/subscriptionContextApi';

const Purchase = ({navigation}) => {
  const {mySubscriptionList} = useContext(SubscriptionApiData);

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
            <Text style={[styles.dashboardHeadTitle]}>Library</Text>
            <View style={styles.homeBtnWrapper}>
              <PageBackBtn navigation={navigation} />
            </View>
          </View>
        </View>

        <View style={styles.scrollContainer}>
          <ScrollView style={{flex: 1}}>
            <View style={{marginBottom: '15%'}}>
              <FlatList
                data={mySubscriptionList}
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
                      <View style={styles.subscribeSubContainer}>
                        <Text style={styles.subscibePrice}>
                          GH {item.amount}
                        </Text>
                        <Text style={{color: '#000000'}}>
                          per {item.durationType}
                        </Text>
                      </View>
                      <View>
                        <Text style={{color: '#000000'}}>
                          40 minutes test time
                        </Text>
                      </View>
                      <View
                        style={[styles.subscribeSubContainer, {marginTop: 15}]}>
                        <Text style={styles.subscribeSubDate}>
                          Purchased on {ReadDate(item.startDate)}
                        </Text>
                        <Text style={styles.subscribeSubDate}>
                          Expire on {ReadDate(item.endDate)}
                        </Text>
                      </View>
                    </View>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <NoDataAvailable data={mySubscriptionList} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Purchase;
