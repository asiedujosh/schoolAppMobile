import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserSession = async (accessToken, username) => {
  try {
    await AsyncStorage.setItem(
      'user_session',
      JSON.stringify({
        token: accessToken,
        username: username,
      }),
    );
  } catch (error) {
    // There was an error on the native side
    console.log(error);
  }
};

export const retrieveUserSession = async () => {
  try {
    // console.log('Hello we retrieve sessions');
    const session = await AsyncStorage.getItem('user_session');

    if (session !== undefined) {
      // Congrats! You've just retrieved your first value!
      return session;
    }
  } catch (error) {
    // There was an error on the native side
    console.log(error);
  }
};

export const removeUserSession = async () => {
  try {
    await AsyncStorage.removeItem('user_session');
    // Congrats! You've just removed your first value!
  } catch (error) {
    // There was an error on the native side
    console.log(error);
  }
};
