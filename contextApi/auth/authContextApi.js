import React, {useState, createContext} from 'react';
import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
export const AuthApiData = createContext();

const AuthApiDataProvider = props => {
  const [alreadyLoggedIn, setAlreadyLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState();
  const [registerFormData, setRegisterFormData] = useState();
  const [registerStage, setRegisterStage] = useState(0);

  const processLogin = async data => {
    let response = await login(data);
    if (response) {
      setUserProfile(response.data.user);
      // set the cookie
      EncryptedStorage(response.data.access_token, username);
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.data.access_token}`;
      setAlreadyLoggedIn(true);
    } else {
      //notify(BAD_REQUEST_STATUS, "Invalid Username/Password")
    }
  };

  const processRegister = async data => {
    let response = await register(data);
    if (response) {
      setUserProfile(response.data.user);
      setAlreadyLoggedIn(true);
    }
  };

  return (
    <AuthApiData.Provider
      value={{
        registerFormData,
        setRegisterFormData,
        registerStage,
        setRegisterStage,
        alreadyLoggedIn,
        processLogin,
        processRegister,
      }}>
      {props.children}
    </AuthApiData.Provider>
  );
};

export default AuthApiDataProvider;
