import React, {useState, createContext} from 'react';
import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
export const AuthApiData = createContext();

const AuthApiDataProvider = props => {
  const [alreadyLoggedIn, setAlreadyLoggedIn] = useState(false);
  const [registerFormData, setRegisterFormData] = useState();
  const [registerStage, setRegisterStage] = useState(0);

  return (
    <AuthApiData.Provider
      value={{
        registerFormData,
        setRegisterFormData,
        registerStage,
        setRegisterStage,
      }}>
      {props.children}
    </AuthApiData.Provider>
  );
};

export default AuthApiDataProvider;
