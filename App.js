import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/home';
import Dashboard from './screens/dashboard';
import Quiz from './screens/quiz';
import QuizInput from './screens/quizInput';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => null,
          }}
        />
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
          name="QuizInput"
          component={QuizInput}
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
