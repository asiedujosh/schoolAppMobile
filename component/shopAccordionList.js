import {useState, useContext, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {StoreApiData} from '../contextApi/store/storeContextApi';
import {truncateText} from '../utils/truncateText.js';
// import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {ExamSubjectApiData} from '../contextApi/examSubjectRelation/examSubjectRelationContextApi.js';
import styles from '../globalStyles/Styles';

const AccordionList = ({data, purchase, navigation}) => {
  const {examSubjectList} = useContext(ExamSubjectApiData);

  let handleGoToSubscribeAndPay = data => {
    navigation.navigate('subscribeAndPay', {id: data});
  };

  // const addToCart = id => {
  //   //Add to cart
  //   let chosenSubject = itemsOnSale.filter(item => item.id == id);
  //   setCart([...cart, chosenSubject[0]]);
  //   //Remove from store
  //   let remainingSubjects =
  //     itemsOnSale && itemsOnSale.filter(item => item.id !== id);
  //   setItemsOnSale([...remainingSubjects]);
  // };
  let displayExamSubjectLinkId = (arrayArg, id) => {
    let examSubjectName = arrayArg.filter(item => item.subjectId == id)[0].name;
    return examSubjectName;
  };

  let List =
    data.length > 0 ? (
      data.map(item => (
        <View key={item.id} style={styles.accordionStoreListCard}>
          <View>
            <Text
              style={[styles.accordTitle, {paddingVertical: 20}]}
              onPress={() =>
                handleGoToSubscribeAndPay(
                  displayExamSubjectLinkId(examSubjectList, item.subjectId),
                )
              }>
              {truncateText(
                displayExamSubjectLinkId(examSubjectList, item.subjectId),
                30,
              )}
            </Text>
          </View>
        </View>
      ))
    ) : (
      <Text style={[styles.accordTitle, {color: '#ffffff'}]}>
        No program available
      </Text>
    );
  return List;
};

export default AccordionList;
