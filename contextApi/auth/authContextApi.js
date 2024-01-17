import React, {useState, createContext, useEffect} from 'react';
import {
  storeUserSession,
  retrieveUserSession,
  removeUserSession,
} from '../../utils/localStore';
import {Login, Register} from './auth';
export const AuthApiData = createContext();

const AuthApiDataProvider = props => {
  const [alreadyLoggedIn, setAlreadyLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState();
  const [registerFormData, setRegisterFormData] = useState();
  const [registerStage, setRegisterStage] = useState(0);

  useEffect(() => {
    async function fetchUser() {
      const userSession = await retrieveUserSession();
      if (userSession) {
        const parsedObject = JSON.parse(userSession);
        setUserProfile(parsedObject.username);
        setAlreadyLoggedIn(true);
        setUserProfile(userSession.username);
      }
      //removeUserSession();
    }
    fetchUser();
  }, []);

  const processLogin = async data => {
    let response = await Login(data);
    if (response) {
      setUserProfile(response.data.user);
      // set the cookie
      storeUserSession(response.data.token, username);
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.token}`;
      setAlreadyLoggedIn(true);
    } else {
      //notify(BAD_REQUEST_STATUS, "Invalid Username/Password")
    }
  };

  const processRegister = async data => {
    //console.log(data);
    setLoading(true);
    let response = await Register(data);
    if (response) {
      setUserProfile(response.data.user.username);
      storeUserSession(response.data.token, response.data.user.username);
      setLoading(false);
      setAlreadyLoggedIn(true);
    }
  };

  const processLogout = async () => {
    removeUserSession();
  };

  return (
    <AuthApiData.Provider
      value={{
        userProfile,
        registerFormData,
        setRegisterFormData,
        registerStage,
        setRegisterStage,
        alreadyLoggedIn,
        processLogin,
        processRegister,
        processLogout,
        loading,
        setLoading,
      }}>
      {props.children}
    </AuthApiData.Provider>
  );
};

export default AuthApiDataProvider;
