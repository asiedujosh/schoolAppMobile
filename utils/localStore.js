import EncryptedStorage from 'react-native-encrypted-storage';

export const storeUserSession = async (accessToken, username) => {
  try {
    await EncryptedStorage.setItem(
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
    const session = await EncryptedStorage.getItem('user_session');

    if (session !== undefined) {
      // Congrats! You've just retrieved your first value!
      return undefined;
    }
  } catch (error) {
    // There was an error on the native side
    console.log(error);
  }
};

export const removeUserSession = async () => {
  try {
    await EncryptedStorage.removeItem('user_session');
    // Congrats! You've just removed your first value!
  } catch (error) {
    // There was an error on the native side
    console.log(error);
  }
};
