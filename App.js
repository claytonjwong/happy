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
        <Stack.Screen name='Annoying' component={Annoying} />
        <Stack.Screen name='Biases' component={Biases} />
        <Stack.Screen name='Habits' component={Habits} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Rewirements' component={Rewirements} />
        <Stack.Screen name='Wanting' component={Wanting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
