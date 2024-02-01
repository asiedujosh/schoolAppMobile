import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/home';
import Dashboard from './screens/dashboard';
import Quiz from './screens/quiz';
import Review from './screens/review';
import Records from './screens/records';
import RecordView from './screens/recordView';
import EditUserInfo from './screens/editUserInfo';
import EditPassword from './screens/editPassword';
import GameBoard from './screens/gameBoard';
import Test from './screens/test';
import NotAvailable from './screens/notAvailable.js';
import GameBoardTwo from './screens/gameBoardTwo';
import GameResultTwo from './screens/gameResultTwo';
import RecordTwo from './screens/recordTwo.js';
import ReviewTwo from './screens/reviewTwo.js';
import {AuthApiData} from './contextApi/auth/authContextApi.js';
import FAQ from './screens/faq';
import Setting from './screens/settings';
import QuestionsNotAvailable from './screens/questionNotFound';
import GameResult from './screens/gameResult';
import Pause from './screens/pause';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect, useContext} from 'react';

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
          name="Test"
          component={Test}
          options={{
            header: () => null,
          }}
        /> */}
        {/* <Stack.Screen
          name="GameResultTwo"
          component={GameResultTwo}
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
          name="RecordView"
          component={RecordView}
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
          name="QuestionsNotAvailable"
          component={QuestionsNotAvailable}
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
          name="Review"
          component={Review}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
