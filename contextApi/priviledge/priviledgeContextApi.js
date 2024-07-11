import React, {useState, createContext, useEffect} from 'react';
import {getAllPriviledge} from './priviledge';

export const PriviledgeApiData = createContext();

const PriviledgeApiDataProvider = props => {
  const [priviledgeList, setPriviledgeList] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    processGetAllPriviledge();
  }, []);

  const processGetAllPriviledge = async () => {
    try {
      let response = await getAllPriviledge();
      if (response) {
        setPriviledgeList(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const processCheckIfUserHasPriviledge = async username => {
    if (priviledgeList.length > 0) {
      let response = priviledgeList.find(item => item.username == username);
      // console.log(response !== undefined ? true : false);
      return response !== undefined ? true : false;
    } else {
      return false;
    }
  };

  return (
    <PriviledgeApiData.Provider
      value={{
        priviledgeList,
        processGetAllPriviledge,
        processCheckIfUserHasPriviledge,
      }}>
      {props.children}
    </PriviledgeApiData.Provider>
  );
};

export default PriviledgeApiDataProvider;
