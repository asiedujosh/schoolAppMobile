import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/home';
import Dashboard from './screens/dashboard';
import Quiz from './screens/quiz';
import Review from './screens/review';
import GameBoard from './screens/gameBoard';
import GameResult from './screens/gameResult';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
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
          name="Home"
          component={Home}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
