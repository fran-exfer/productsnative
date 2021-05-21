import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsContext from './contexts/ProductsContext';
import products from './mock/products';

import ProductList from './pages/product-list/ProductList';
import ProductDetails from './pages/product-details/ProductDetails';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <ProductsContext.Provider value={products}>
        <Stack.Navigator>
          <Stack.Screen
            name="ProductList"
            component={ProductList}
            options={{ title: 'Product List' }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ title: 'Product Details' }}
          />
        </Stack.Navigator>
      </ProductsContext.Provider>
    </NavigationContainer>
  );
}

export default App;
