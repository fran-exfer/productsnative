import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductList from './pages/product-list/ProductList';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product List" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
