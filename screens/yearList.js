import React, {useContext} from 'react';
import {Text, View, ScrollView, Pressable, FlatList} from 'react-native';
import styles from '../globalStyles/Styles';
import PageBackBtn from '../component/backPageBtn.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {useRoute} from '@react-navigation/native';

const YearList = ({navigation}) => {
  const route = useRoute();
  const examType = route.params?.data;

  const {yearList} = useContext(QuestionApiData);

  const goToSubjectList = item => {
    navigation.navigate('SubjectList', {
      data: {examType: examType, year: item},
    });
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
              <Text style={[styles.dashboardHeadTitle]}>Years</Text>
              <View style={styles.homeBtnWrapper}>
                <PageBackBtn navigation={navigation} />
              </View>
            </View>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              <FlatList
                data={yearList}
                pagingEnabled
                numColumns={1}
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate={'fast'}
                renderItem={({item}) => {
                  return (
                    <Pressable
                      style={[styles.analysisCard, {marginBottom: '5%'}]}
                      onPress={() => {
                        goToSubjectList(item.id);
                      }}>
                      <View style={{marginBottom: '5%'}}>
                        <Text style={styles.analysisTableText}>
                          {item.year}
                        </Text>
                      </View>
                    </Pressable>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default YearList;
