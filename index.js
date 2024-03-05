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
import NewsApiDataProvider from './contextApi/news/newsContextApi';
import StoreApiDataProvider from './contextApi/store/storeContextApi';

const MainApp = () => {
  return (
    <AuthApiDataProvider>
      <StoreApiDataProvider>
        <PackageApiDataProvider>
          <NewsApiDataProvider>
            <QuestionApiDataProvider>
              <RecordApiDataProvider>
                <GestureHandlerRootView style={{flex: 1}}>
                  <App />
                </GestureHandlerRootView>
              </RecordApiDataProvider>
            </QuestionApiDataProvider>
          </NewsApiDataProvider>
        </PackageApiDataProvider>
      </StoreApiDataProvider>
    </AuthApiDataProvider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
