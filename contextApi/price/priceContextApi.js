import React, {useState, createContext, useEffect} from 'react';
import {getAllPricing} from './price';

export const PriceApiData = createContext();

const PriceApiDataProvider = props => {
  const [priceList, setPriceList] = useState([]);

  useEffect(() => {
    processGettingAllPricing();
  }, []);

  const processGettingAllPricing = async () => {
    try {
      let response = await getAllPricing();
      if (response) {
        setPriceList(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PriceApiData.Provider
      value={{
        processGettingAllPricing,
        priceList,
      }}>
      {props.children}
    </PriceApiData.Provider>
  );
};

export default PriceApiDataProvider;
