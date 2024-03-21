import {useState, useContext, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {StoreApiData} from '../contextApi/store/storeContextApi';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import styles from '../globalStyles/Styles';

const AccordionList = ({data, purchase}) => {
  const {subjectList} = useContext(QuestionApiData);
  const {cart, setCart, store, setStore, itemsOnSale, setItemsOnSale} =
    useContext(StoreApiData);

  const addToCart = id => {
    //Add to cart
    let chosenSubject = itemsOnSale.filter(item => item.id == id);
    setCart([...cart, chosenSubject[0]]);
    //Remove from store
    let remainingSubjects =
      itemsOnSale && itemsOnSale.filter(item => item.id !== id);
    setItemsOnSale([...remainingSubjects]);
  };

  let List =
    data.length > 0 ? (
      data.map(item => (
        <View key={item.id} style={styles.accordionStoreListCard}>
          <View>
            <Text style={styles.accordTitle}>
              {
                subjectList.filter(item2 => item2.id == item.subjectId)[0]
                  .subject
              }
            </Text>
            {!purchase && (
              <Text style={styles.accordTitle}>GHS {item.price}</Text>
            )}
          </View>
          {!purchase && (
            <Pressable
              style={[
                styles.loadingBtn,
                styles.premiumBtn,
                {
                  width: 100,
                  marginVertical: 2,
                  height: 40,
                },
              ]}
              onPress={() => {
                addToCart(item.id);
              }}>
              <Text style={{color: '#ffffff'}}>Add</Text>
            </Pressable>
          )}
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
