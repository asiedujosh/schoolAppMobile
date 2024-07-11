import {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import styles from '../globalStyles/Styles';
import Icon from 'react-native-vector-icons/Feather';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {StoreApiData} from '../contextApi/store/storeContextApi';
import StoreAccordionItem from '../component/shopAccordionItem.js';
import AccordionList from '../component/shopAccordionList.js';
import PageBackBtn from '../component/backPageBtn.js';
import NoDataAvailable from '../component/noDataComponent.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const Sales = ({navigation}) => {
  const {examsList} = useContext(QuestionApiData);
  const {processGetStoreInfo, itemsOnSale} = useContext(StoreApiData);
  useEffect(() => {
    processGetStoreInfo();
  }, []);

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
            <Text style={[styles.dashboardHeadTitle]}>Store</Text>
            <View style={styles.homeBtnWrapper}>
              <PageBackBtn navigation={navigation} />
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
                        <AccordionList
                          navigation={navigation}
                          data={
                            itemsOnSale &&
                            itemsOnSale.filter(item2 => item2.examId == item.id)
                          }
                        />
                      </StoreAccordionItem>
                    </View>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            {NoDataAvailable(examsList)}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Sales;
