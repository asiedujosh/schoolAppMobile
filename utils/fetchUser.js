import {retrieveUserSession} from './localStore';

export default async function fetchUser() {
  const userSession = await retrieveUserSession();
  if (userSession) {
    const dataObject = JSON.parse(userSession);
    return dataObject;
    // console.log(dataObject.data);
    // setUserProfile(dataObject.data);
    // setAlreadyLoggedIn(true);
  }
}
