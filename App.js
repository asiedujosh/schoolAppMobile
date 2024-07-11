import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/home';
import Dashboard from './screens/dashboard';
import Quiz from './screens/quiz';
import Review from './screens/review';
import Records from './screens/records';
import OralQuiz from './screens/oralQuiz.js';
import RecordView from './screens/recordView';
import EditUserInfo from './screens/editUserInfo';
import EditPassword from './screens/editPassword';
import GameBoard from './screens/gameBoard';
import OralGameBoard from './screens/oralGameBoard.js';
import Analysis from './screens/analysis';
import News from './screens/news.js';
import BannerAds from './googleadscomponent/adsbanner.js';
import RewardAds from './googleadscomponent/adsreward.js';
import MakePayment from './paymentGateway/paystackView.js';
import SendMessage from './screens/sendMessage.js';
// import Test from './screens/test';
// import TestTwo from './screens/testTwo.js';
import NotAvailable from './screens/notAvailable.js';
import UpgradeCongrats from './screens/upgradeCongrats.js';
import Upgrading from './screens/upgrading.js';
// import GameBoardTwo from './screens/gameBoardTwo';
// import GameResultTwo from './screens/gameResultTwo';
// import RecordTwo from './screens/recordTwo.js';
// import ReviewTwo from './screens/reviewTwo.js';
// import AsciiOutput from './screens/asciiHtml.js';
import {AuthApiData} from './contextApi/auth/authContextApi.js';
import FAQ from './screens/faq';
import Setting from './screens/settings';
import QuestionsNotAvailable from './screens/questionNotFound';
import QuestionsNotAvailableTwo from './screens/questionNotFoundTwo';
import GameResult from './screens/gameResult';
import OralGameResult from './screens/oralGameResult.js';
import Pause from './screens/pause';
import Cart from './screens/cart.js';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect, useContext} from 'react';
import AnalysisDetails from './screens/analysisDetails.js';
import SubscribeAndPay from './screens/subscribeAndPay.js';
import YearList from './screens/yearList.js';
import SubjectList from './screens/subjectList.js';
import ShoppingContainer from './screens/shopHistoryTab.js';
import PurchaseCongrats from './screens/purchaseCongrats.js';
import NotPurchased from './screens/notPurchased.js';
import ForgetPassword from './screens/forgetPassword.js';
import PasswordResetCorrect from './screens/passwordResetCorrect.js';
import OralReview from './screens/oralReview.js';
import OralAnalysisDetails from './screens/oralAnalysisDetails.js';
import OralAnalysis from './screens/oralAnalysis.js';
import OralRecords from './screens/oralRecords.js';
import OralRecordView from './screens/oralRecordView.js';

const Stack = createStackNavigator();

const App = () => {
  const {registerStage, setRegisterStage, alreadyLoggedIn} =
    useContext(AuthApiData);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="TestTwo"
          component={AsciiOutput}
          options={{
            header: () => null,
          }}
        /> */}
        {/* <Stack.Screen
          name="GameBoardTwo"
          component={GameBoardTwo}
          options={{
            header: () => null,
          }}
        /> */}

        {/* <Stack.Screen
          name="RewardAds"
          component={RewardAds}
          options={{
            header: () => null,
          }}
        /> */}

        {alreadyLoggedIn ? (
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              header: () => null,
            }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => null,
            }}
          />
        )}

        <Stack.Screen
          name="Record"
          component={Records}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="OralRecord"
          component={OralRecords}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgetPassword}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="PasswordResetSuccess"
          component={PasswordResetCorrect}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="subscribeAndPay"
          component={SubscribeAndPay}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="purchaseCongrats"
          component={PurchaseCongrats}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="RecordView"
          component={RecordView}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="OralRecordView"
          component={OralRecordView}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="YearList"
          component={YearList}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="SubjectList"
          component={SubjectList}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="Analysis"
          component={Analysis}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="OralAnalysis"
          component={OralAnalysis}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="Upgrading"
          component={Upgrading}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="SendMessage"
          component={SendMessage}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="MakePayment"
          component={MakePayment}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="UpgradeCongrats"
          component={UpgradeCongrats}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="AnalysisDetail"
          component={AnalysisDetails}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="OralAnalysisDetail"
          component={OralAnalysisDetails}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="Orals"
          component={OralQuiz}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="QuestionsNotAvailable"
          component={QuestionsNotAvailable}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="QuestionsNotAvailableTwo"
          component={QuestionsNotAvailableTwo}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="NotAvailable"
          component={NotAvailable}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="NotPurchased"
          component={NotPurchased}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="News"
          component={News}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="Pause"
          component={Pause}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="GameBoard"
          component={GameBoard}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="OralGameBoard"
          component={OralGameBoard}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="Review"
          component={Review}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="OralReview"
          component={OralReview}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="Faq"
          component={FAQ}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="GameResult"
          component={GameResult}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="OralGameResult"
          component={OralGameResult}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="editUserInfo"
          component={EditUserInfo}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="editPassword"
          component={EditPassword}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="salesShop"
          component={ShoppingContainer}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
