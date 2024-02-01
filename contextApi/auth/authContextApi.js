import React, {useState, createContext, useEffect} from 'react';
import {
  NOTFOUND,
  TIMEEXCEED,
  UNHANDLEERR,
  SIGNINERR,
  BAD_REQUEST_STATUS,
} from '../../constant/httpConstant';
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
  const [registerFormData, setRegisterFormData] = useState({
    username: '',
    country: {
      dial_code: '+233',
      name: 'Ghana',
    },
    tel: '',
    email: '',
    password: '',
    confirmPassword: '',
    email: '',
  });
  const [registerStage, setRegisterStage] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  //Handling Errors
  const [signInLoading, setSignInLoading] = useState(false);
  const [signInError, setSignInError] = useState(false);
  const [netWorkError, setNetworkError] = useState(false);
  const [unknownError, setUnknownError] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState(false);

  // const [selected, setSelected] = useState('+233');
  // const [country, setCountry] = useState('');
  // const [phone, setPhone] = useState('000 000 0000');

  useEffect(() => {
    async function fetchUser() {
      const userSession = await retrieveUserSession();
      if (userSession) {
        const dataObject = JSON.parse(userSession);
        console.log(dataObject.data);
        setUserProfile(dataObject.data);
        setAlreadyLoggedIn(true);
      }
    }
    fetchUser();
  }, []);

  const processLogin = async data => {
    console.log(data);
    let response = await Login(data);
    if (response === TIMEEXCEED) {
      setSignInLoading(false);
      setNetworkError(true);
      setErrorMessage('Network Error');
      console.log('Network Error');
    }
    if (response === NOTFOUND) {
      setSignInLoading(false);
      setSignInError(true);
      // setErrorMessage('Network Error')
      console.log('Credentials error');
    }
    if (response === SIGNINERR) {
      setSignInLoading(false);
      setSignInError(true);
      console.log('Credentials error');
    }
    if (response === UNHANDLEERR) {
      setSignInLoading(false);
      setUnknownError(true);
      setErrorMessage('Unexpected Error');
      console.log('Unexpected Error');
    }
    if (response.data) {
      setUserProfile(response.data.user);
      // set the cookie
      storeUserSession(response.data.token, response.data.user);
      setSignInLoading(false);
      setAlreadyLoggedIn(true);
    }
  };

  const processRegister = async data => {
    //console.log(data);
    setSignInLoading(true);
    (data.country = registerFormData.country.name),
      (data.tel = `${registerFormData.country.dial_code}" "${registerFormData.tel}`);
    let response = await Register(data);
    if (response === TIMEEXCEED) {
      setSignInLoading(false);
      setNetworkError(true);
      setErrorMessage('Network Error');
      console.log('Network Error');
    }
    if (response === NOTFOUND) {
      setSignInLoading(false);
      setSignInError(true);
      // setErrorMessage('Network Error')
      console.log('Credentials error');
    }
    if (response === SIGNINERR) {
      setSignInLoading(false);
      setErrorMessage('Sign Error');
      setSignInError(true);
      console.log('Credentials error');
    }
    if (response === UNHANDLEERR) {
      setSignInLoading(false);
      setErrorMessage('Username already available');
      setUnknownError(true);

      console.log('Unexpected Error');
    }

    if (response === BAD_REQUEST_STATUS) {
      setSignInLoading(false);
      setErrorMessage('Username already taken');
      setUsernameTaken(true);
    }
    if (response.data) {
      setSignInLoading(false);
      setUserProfile(response.data.user);
      storeUserSession(response.data.token, response.data.user);
      setLoading(false);
      setAlreadyLoggedIn(true);
    }
  };

  const processLogout = async () => {
    removeUserSession();
    setAlreadyLoggedIn(false);
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
        signInLoading,
        setSignInLoading,
        signInError,
        setSignInError,
        netWorkError,
        setNetworkError,
        unknownError,
        setUnknownError,
        setErrorMessage,
        errorMessage,
        usernameTaken,
        setUsernameTaken,
        // selected,
        // setSelected,
        // country,
        // setCountry,
        // phone,
        // setPhone,
      }}>
      {props.children}
    </AuthApiData.Provider>
  );
};

export default AuthApiDataProvider;
