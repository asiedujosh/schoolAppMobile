import React, {useState, createContext, useEffect} from 'react';
import {getMySubscription} from './subscription';

export const SubscriptionApiData = createContext();

const SubscriptionApiDataProvider = props => {
  const [mySubscriptionList, setMySubscriptionList] = useState([]);
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     processGetMySubscription();
  //   }, []);

  const processGetMySubscription = async data => {
    try {
      let response = await getMySubscription(data);
      if (response) {
        setMySubscriptionList(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SubscriptionApiData.Provider
      value={{
        mySubscriptionList,
        processGetMySubscription,
      }}>
      {props.children}
    </SubscriptionApiData.Provider>
  );
};

export default SubscriptionApiDataProvider;
