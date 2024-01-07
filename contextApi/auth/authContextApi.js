import React, {useState, createContext} from 'react';
import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
export const AuthApiData = createContext();

const AuthApiDataProvider = props => {
  const [alreadyLoggedIn, setAlreadyLoggedIn] = useState(false);

  return (
    <AuthApiData.Provider value={{}}>{props.children}</AuthApiData.Provider>
  );
};

export default AuthApiDataProvider;
