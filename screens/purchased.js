import {useState, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import styles from '../globalStyles/Styles';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {StoreApiData} from '../contextApi/store/storeContextApi';
import HomeBtn from '../component/homeBtn.js';
import StoreAccordionItem from '../component/shopAccordionItem.js';
import AccordionList from '../component/shopAccordionList.js';
import AccordionItem from '../component/accordionItem';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const Purchase = ({navigation}) => {
  const {examsList, yearList} = useContext(QuestionApiData);
  const {purchases} = useContext(StoreApiData);

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
              <Text style={[styles.dashboardHeadTitle]}>Library</Text>
              <View style={styles.homeBtnWrapper}>
                <HomeBtn handleHome={handleHomeBtn} />
              </View>
            </View>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              <FlatList
                data={examsList}
                pagingEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate={'fast'}
                renderItem={({item}) => {
                  return (
                    <View>
                      <StoreAccordionItem title={item.exam}>
                        <FlatList
                          data={yearList}
                          pagingEnabled
                          snapToAlignment="center"
                          scrollEventThrottle={16}
                          decelerationRate={'fast'}
                          renderItem={({item}) => {
                            return (
                              <View>
                                <StoreAccordionItem
                                  title={item.year}
                                  year={true}>
                                  <AccordionList
                                    data={
                                      purchases &&
                                      purchases.filter(
                                        item2 => item2.examId == item.id,
                                      )
                                    }
                                    purchase={true}
                                  />
                                </StoreAccordionItem>
                              </View>
                            );
                          }}
                          keyExtractor={(item, index) => index.toString()}
                        />
                      </StoreAccordionItem>
                    </View>
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

export default Purchase;