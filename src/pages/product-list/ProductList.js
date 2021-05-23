import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Grid from 'react-native-grid-component';

import ProductsContext from '../../contexts/ProductsContext';
import ProductItem from './ProductItem';

function ProductList({ navigation }) {
  const products = React.useContext(ProductsContext);

  const [search, onChangeSearch] = React.useState('');

  const filteredProducts =
    search.length >= 3
      ? products.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase()),
        )
      : products;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeSearch}
        value={search}
        placeholder="Search..."
      />

      <Grid
        style={styles.list}
        numColumns={2}
        data={filteredProducts}
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
        renderPlaceholder={(i) => <View key={i} style={styles.placeholder} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  input: {
    padding: 15,
    backgroundColor: 'white',
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    margin: 8,
    padding: 10,
  },
});

export default ProductList;
