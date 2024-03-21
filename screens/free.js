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

const Free = ({navigation}) => {
  const {examsList, yearList} = useContext(QuestionApiData);
  const {freeProducts} = useContext(StoreApiData);

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard');
  };

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
              <HomeBtn handleHome={handleHomeBtn} />
            </View>
          </View>
        </View>

        <View style={styles.scrollContainer}>
          <ScrollView style={{flex: 1}}>
            <View style={{marginBottom: '15%'}}>
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
                                      freeProducts &&
                                      freeProducts.filter(
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
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Free;
