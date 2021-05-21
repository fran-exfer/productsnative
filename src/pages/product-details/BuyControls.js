import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from 'apsl-react-native-button';

function BuyControls({ price, stock }) {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>{price}€</Text>
      <Button
        style={styles.button}
        textStyle={styles.buttonText}
        disabledStyle={styles.button_disabled}
        isDisabled={stock === 0}>
        {stock > 0 ? 'Buy' : 'Out of stock'}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  price: {
    flex: 1,
    fontSize: 30,
  },
  button: {
    flex: 1,
    backgroundColor: '#3EB1C8',
    borderWidth: 0,
  },
  button_disabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default BuyControls;
