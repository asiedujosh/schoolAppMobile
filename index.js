/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthApiDataProvider from './contextApi/auth/authContextApi';
import PackageApiDataProvider from './contextApi/package/packageContextApi';
import QuestionApiDataProvider from './contextApi/question/questionContextApi';
import RecordApiDataProvider from './contextApi/records/recordsContextApi';

const MainApp = () => {
  return (
    <AuthApiDataProvider>
      <PackageApiDataProvider>
        <QuestionApiDataProvider>
          <RecordApiDataProvider>
            <GestureHandlerRootView style={{flex: 1}}>
              <App />
            </GestureHandlerRootView>
          </RecordApiDataProvider>
        </QuestionApiDataProvider>
      </PackageApiDataProvider>
    </AuthApiDataProvider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
