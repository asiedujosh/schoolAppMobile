import React, {useState, createContext, useEffect} from 'react';
import {getStoreProducts, purchaseSubjects, getPurchases} from './store';
// import {Login, Register} from './question';
export const StoreApiData = createContext();

const StoreApiDataProvider = props => {
  const [store, setStore] = useState();
  const [itemsOnSale, setItemsOnSale] = useState([]);
  const [freeProducts, setFreeProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [purchaseStatus, setPurchaseStatus] = useState(false);

  let processGetStoreInfo = async () => {
    try {
      let response = await getStoreProducts();
      if (response) {
        setStore(response.data.data);
        let saleProducts = response.data.data.filter(
          item => item.offerType !== 'Free',
        );
        let freeProducts = response.data.data.filter(
          item => item.offerType == 'Free',
        );
        setFreeProducts(freeProducts);
        let filteredArray = saleProducts.filter(
          item1 =>
            !purchases.some(
              item2 =>
                item2.examId == item1.examId &&
                item2.yearId == item1.yearId &&
                item2.subjecId == item1.subjectId,
            ),
        );
        console.log(purchases);
        console.log(saleProducts);
        console.log(filteredArray);
        setItemsOnSale(filteredArray);
      }
    } catch (err) {
      console.log(err);
    }
  };

  let processGetPurchase = async data => {
    try {
      let response = await getPurchases(data);
      if (response) {
        setPurchases(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  let processPurchase = async data => {
    try {
      console.log(data);
      let response = await purchaseSubjects(data);
      if (response) {
        setCart([]);
        processGetPurchase(data.id);
        setPurchaseStatus(prev => !prev);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StoreApiData.Provider
      value={{
        store,
        setStore,
        processGetStoreInfo,
        cart,
        setCart,
        itemsOnSale,
        setItemsOnSale,
        processPurchase,
        processGetPurchase,
        purchaseStatus,
        setPurchaseStatus,
        purchases,
        freeProducts,
      }}>
      {props.children}
    </StoreApiData.Provider>
  );
};

export default StoreApiDataProvider;
