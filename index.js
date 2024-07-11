/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import PriceApiDataProvider from './contextApi/price/priceContextApi';
import ExamSubjectApiDataProvider from './contextApi/examSubjectRelation/examSubjectRelationContextApi';
import SubscriptionApiDataProvider from './contextApi/subscription/subscriptionContextApi';
import AuthApiDataProvider from './contextApi/auth/authContextApi';
import PackageApiDataProvider from './contextApi/package/packageContextApi';
import PriviledgeApiDataProvider from './contextApi/priviledge/priviledgeContextApi';
import QuestionApiDataProvider from './contextApi/question/questionContextApi';
import RecordApiDataProvider from './contextApi/records/recordsContextApi';
import NewsApiDataProvider from './contextApi/news/newsContextApi';
import StoreApiDataProvider from './contextApi/store/storeContextApi';
import TrackPlayer from 'react-native-track-player';

const MainApp = () => {
  return (
    <AuthApiDataProvider>
      <ExamSubjectApiDataProvider>
        <SubscriptionApiDataProvider>
          <PriviledgeApiDataProvider>
            <PriceApiDataProvider>
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
            </PriceApiDataProvider>
          </PriviledgeApiDataProvider>
        </SubscriptionApiDataProvider>
      </ExamSubjectApiDataProvider>
    </AuthApiDataProvider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
TrackPlayer.registerPlaybackService(() => require('./service'));
