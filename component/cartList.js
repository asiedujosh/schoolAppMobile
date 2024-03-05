import {useState, useContext, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {StoreApiData} from '../contextApi/store/storeContextApi';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import styles from '../globalStyles/Styles';

const CartList = ({data}) => {
  const {subjectList} = useContext(QuestionApiData);
  const {cart, setCart, itemsOnSale, setItemsOnSale} = useContext(StoreApiData);

  const removeFromCart = id => {
    let remainingSubjects = cart.filter(item => item.id == id);
    setItemsOnSale([...itemsOnSale, remainingSubjects[0]]);
    // //Add to cart
    let removeSubject = cart.filter(item => item.id !== id);
    setCart(removeSubject);
    // //Remove from store
    // let addBack = store.filter(item => item.id == id);
    // setItemsOnSale([...itemsOnSale, addBack]);
  };

  return (
    <>
      {data ? (
        <View key={data.id} style={styles.accordionStoreListCard}>
          <View>
            <Text style={styles.accordTitle}>
              {
                subjectList.filter(item2 => item2.id == data.subjectId)[0]
                  .subject
              }
            </Text>
            <Text style={styles.accordTitle}>GHS {data.price}</Text>
          </View>
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
              removeFromCart(data.id);
            }}>
            <Text style={{color: '#ffffff'}}>Remove</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <Text>No Data</Text>
        </View>
      )}
    </>
  );
};

export default CartList;
