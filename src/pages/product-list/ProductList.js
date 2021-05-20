import * as React from 'react';
import { Text, View } from 'react-native';

function ProductList() {
  return (
    <View style={styles.container}>
      <Text>Product List</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default ProductList;
