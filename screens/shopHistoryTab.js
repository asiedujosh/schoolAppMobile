import {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Purchase from './purchased';
import Free from './free';
import Sales from './sales';

const Tab = createBottomTabNavigator();

function ShoppingContainer() {
  return (
    <Tab.Navigator
      initialRouteName="Sales"
      screenOptions={{
        tabBarActiveTintColor: '#0347A1',
      }}>
      <Tab.Screen
        name="Sales"
        component={Sales}
        options={{
          header: () => null,
          tabBarLabel: 'Store',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="shopping-cart"
              size={20}
              color={focused ? '#0347A1' : '#2C444E'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Purchase"
        component={Purchase}
        options={{
          header: () => null,
          tabBarLabel: 'Purchased',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="shopping-bag"
              size={20}
              color={focused ? '#0347A1' : '#2C444E'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Free"
        component={Free}
        options={{
          header: () => null,
          tabBarLabel: 'Free',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="bookmark"
              size={20}
              color={focused ? '#0347A1' : '#2C444E'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default ShoppingContainer;
