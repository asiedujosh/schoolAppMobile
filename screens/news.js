import {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from '../globalStyles/Styles';
import HomeBtn from '../component/homeBtn.js';
import {NewsApiData} from '../contextApi/news/newsContextApi.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const News = ({navigation}) => {
  const {processGettingAllNews, loading, news} = useContext(NewsApiData);

  useEffect(() => {
    processGettingAllNews();
  }, []);

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard');
  };

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
              <Text style={[styles.dashboardHeadTitle]}>{'News'}</Text>
              <View style={styles.homeBtnWrapper}>
                <HomeBtn handleHome={handleHomeBtn} />
              </View>
            </View>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              {news ? (
                <FlatList
                  data={news}
                  keyExtractor={item => item.id}
                  pagingEnabled
                  snapToAlignment="center"
                  scrollEventThrottle={16}
                  decelerationRate={'fast'}
                  renderItem={({item}) => {
                    return <View></View>;
                  }}
                />
              ) : (
                <View style={[styles.recordCardContainer, {marginTop: '20%'}]}>
                  <ActivityIndicator size="large" color="#FFFFFF" />
                </View>
              )}
              {news && news.length == 0 && (
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

export default News;
