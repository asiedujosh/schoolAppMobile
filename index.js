/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthApiDataProvider from './contextApi/auth/authContextApi';
import QuestionApiDataProvider from './contextApi/question/questionContextApi';

const MainApp = () => {
  return (
    <AuthApiDataProvider>
      <QuestionApiDataProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <App />
        </GestureHandlerRootView>
      </QuestionApiDataProvider>
    </AuthApiDataProvider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
