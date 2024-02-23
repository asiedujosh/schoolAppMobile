import React, {useState, createContext, useEffect} from 'react';
import {subscribe, getAPackage} from './package';

export const PackageApiData = createContext();

const PackageApiDataProvider = props => {
  const [upgrade, setUpgrade] = useState(false);
  const [packagePrice, setPackagePrice] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    processGettingAPackage();
  }, []);

  const processSubscribe = async data => {
    let response = await subscribe(data);
    if (response) {
      setLoading(prev => !prev);
      setUpgrade(prev => !prev);
    }
  };

  const processGettingAPackage = async () => {
    let response = await getAPackage();
    if (response) {
      setPackagePrice(response.data.data);
    }
  };

  return (
    <PackageApiData.Provider
      value={{
        upgrade,
        processSubscribe,
        processGettingAPackage,
        packagePrice,
        loading,
        setLoading,
      }}>
      {props.children}
    </PackageApiData.Provider>
  );
};

export default PackageApiDataProvider;
