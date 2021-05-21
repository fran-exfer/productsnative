import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsContext from './contexts/ProductsContext';
import products from './mock/products';

import ProductList from './pages/product-list/ProductList';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <ProductsContext.Provider value={products}>
        <Stack.Navigator>
          <Stack.Screen name="Product List" component={ProductList} />
        </Stack.Navigator>
      </ProductsContext.Provider>
    </NavigationContainer>
  );
}

export default App;
