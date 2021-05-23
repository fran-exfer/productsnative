import * as React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

function ProductItem({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.name}>{product.name}</Text>
      <Image style={styles.image} source={product.imageSrc} />
    </TouchableOpacity>
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
