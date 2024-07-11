import React, {useState, createContext, useEffect} from 'react';
import {subscribeToPackage, subscribe, getAPackage} from './package';

export const PackageApiData = createContext();

const PackageApiDataProvider = props => {
  const [upgrade, setUpgrade] = useState(false);
  const [packagePrice, setPackagePrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirmSubscription, setConfirmSubscription] = useState(false);

  useEffect(() => {
    processGettingAPackage();
  }, []);

  const processSubscribe = async data => {
    try {
      let response = await subscribe(data);
      if (response) {
        setLoading(prev => !prev);
        setUpgrade(prev => !prev);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const processGettingAPackage = async () => {
    try {
      let response = await getAPackage();
      if (response) {
        setPackagePrice(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const processSubscribeToPackage = async data => {
    try {
      let response = await subscribeToPackage(data);
      if (response) {
        if (response.data.data === true) {
          setConfirmSubscription(prev => !prev);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PackageApiData.Provider
      value={{
        upgrade,
        processSubscribe,
        processGettingAPackage,
        processSubscribeToPackage,
        confirmSubscription,
        setConfirmSubscription,
        packagePrice,
        loading,
        setLoading,
      }}>
      {props.children}
    </PackageApiData.Provider>
  );
};

export default PackageApiDataProvider;
