import * as React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

function ProductItem({ product }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Image style={styles.image} source={product.imageSrc} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
    padding: 10,
    backgroundColor: 'white',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ProductItem;
