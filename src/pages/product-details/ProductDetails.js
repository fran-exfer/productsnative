import * as React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import BuyControls from './BuyControls';

function ProductDetails({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={product.imageSrc} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.reference}>Ref. no: {product.reference}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <BuyControls price={product.price} stock={product.stock} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 15,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: { height: 200, width: 200 },
  name: { fontSize: 30 },
  reference: { fontStyle: 'italic', marginBottom: 20 },
  description: { fontSize: 18, textAlign: 'justify' },
});

export default ProductDetails;
