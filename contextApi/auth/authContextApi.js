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
import NetInfo from '@react-native-community/netinfo';
import {Login, Register, ForgotPassword, ResetPassword} from './auth';
export const AuthApiData = createContext();

const AuthApiDataProvider = props => {
  const [alreadyLoggedIn, setAlreadyLoggedIn] = useState(false);
  const [resetPasswordPage, setResetPasswordPage] = useState(false);
  const [resetLoader, setResetLoader] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState();
  const [isOffline, setOfflineStatus] = useState(false);
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
  const [forgotSuccessMessage, setForgotSuccessMessage] = useState('');

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
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = state.isConnected && state.isInternetReachable;
      setOfflineStatus(offline);
    });
    //console.log(exampleState);
    if (isOffline) {
      console.log(`Network type ${isOffline}`);
    }

    // Unsubscribe
    return () => removeNetInfoSubscription();
  }, [isOffline]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const userSession = await retrieveUserSession();
      if (userSession) {
        const dataObject = JSON.parse(userSession);
        console.log(dataObject.data);
        setUserProfile(dataObject.data);
        setAlreadyLoggedIn(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const processLogin = async data => {
    try {
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
    } catch (err) {
      console.log(err);
    }
  };

  const processRegister = async data => {
    try {
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
    } catch (err) {
      console.log(err);
    }
  };

  const processForgotPassword = async data => {
    try {
      let response = await ForgotPassword(data);
      if (response.data) {
        setForgotSuccessMessage(response.message);
        setResetPasswordPage(prev => !prev);
      } else {
        console.log('An error showed up');
      }
      setResetLoader(prev => !prev);
    } catch (err) {
      console.log(err);
      setResetLoader(prev => !prev);
    }
  };

  const processResetPassword = async data => {
    try {
      let response = await ResetPassword(data);
      if (response.data) {
        setResetSuccess(prev => !prev);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const processLogout = async () => {
    try {
      removeUserSession();
      setAlreadyLoggedIn(false);
    } catch (err) {
      console.log(err);
    }
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
        fetchUser,
        isOffline,
        processForgotPassword,
        setResetPasswordPage,
        resetPasswordPage,
        resetLoader,
        setResetLoader,
        forgotSuccessMessage,
        processResetPassword,
        resetSuccess,
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
