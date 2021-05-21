import * as React from 'react';
import { Text, View } from 'react-native';

function ProductDetails({ product }) {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
}
