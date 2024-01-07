/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthApiDataProvider from './contextApi/auth/authContextApi';

const MainApp = () => {
  return (
    <AuthApiDataProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <App />
      </GestureHandlerRootView>
    </AuthApiDataProvider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
