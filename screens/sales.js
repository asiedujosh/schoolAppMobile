import {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import styles from '../globalStyles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {StoreApiData} from '../contextApi/store/storeContextApi';
import StoreAccordionItem from '../component/shopAccordionItem.js';
import AccordionList from '../component/shopAccordionList.js';
import {FaqConstants} from '../constant/faqConstant';
import HomeBtn from '../component/homeBtn.js';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const Sales = ({navigation}) => {
  const {examsList, yearList} = useContext(QuestionApiData);
  const {processGetStoreInfo, store, cart, itemsOnSale} =
    useContext(StoreApiData);
  useEffect(() => {
    processGetStoreInfo();
  }, []);

  let handleHomeBtn = () => {
    navigation.navigate('Dashboard');
  };

  const goToCart = () => {
    navigation.navigate('Cart');
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
              <Text style={[styles.dashboardHeadTitle]}>Store</Text>
              <View style={styles.homeBtnWrapper}>
                <HomeBtn handleHome={handleHomeBtn} />
              </View>
            </View>
          </View>
          <View>
            <Pressable
              style={[
                styles.loadingBtn,
                styles.premiumBtn,
                {
                  backgroundColor: '#ffffff',
                  justifyContent: 'space-between',
                  paddingHorizontal: 30,
                },
              ]}
              onPress={goToCart}>
              <Text
                style={[
                  styles.loadingBtnText,
                  {color: '#0347A1', paddingHorizontal: 10},
                ]}>
                View Cart
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="shopping-cart" size={20} color="#0347A1" />
                <Text
                  style={[
                    styles.selectText,
                    {marginLeft: 5, color: '#0347A1'},
                  ]}>
                  {cart.length}
                </Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView>
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
                                      itemsOnSale &&
                                      itemsOnSale.filter(
                                        item2 => item2.examId == item.id,
                                      )
                                    }
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

export default Sales;
