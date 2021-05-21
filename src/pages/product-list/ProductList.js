import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Grid from 'react-native-grid-component';

import ProductsContext from '../../contexts/ProductsContext';
import ProductItem from './ProductItem';

function ProductList({ navigation }) {
  const products = React.useContext(ProductsContext);

  return (
    <View style={styles.container}>
      <Grid
        style={styles.list}
        numColumns={2}
        data={products}
        renderItem={(item, i) => (
          <ProductItem
            key={i}
            product={item}
            onPress={() =>
              navigation.navigate('ProductDetails', {
                product: item,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  list: {
    flex: 1,
  },
});

export default ProductList;
