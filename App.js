import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Annoying from './components/Annoying';
import Biases from './components/Biases';
import Habits from './components/Habits';
import Home from './components/Home';
import Rewirements from './components/Rewirements';
import Wanting from './components/Wanting';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Annoying'
          component={Annoying}
          options={{
            title: 'Mind\'s Annoying Features',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name='Biases'
          component={Biases}
          options={{
            title: 'Overcoming Biases',
            headerStyle: {
              backgroundColor: '#ff7f00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name='Habits'
          component={Habits}
          options={{
            title: 'Better Habits',
            headerStyle: {
              backgroundColor: '#ffff00',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Home'
          }}
        />
        <Stack.Screen
          name='Rewirements'
          component={Rewirements}
          options={{
            title: 'Rewirements',
            headerStyle: {
              backgroundColor: '#00ff00',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name='Wanting'
          component={Wanting}
          options={{
            title: 'Better Wanting',
            headerStyle: {
              backgroundColor: '#0000ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
