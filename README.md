# Products Native

Products Native is an example application made with React Native and React Navigation with learning purposes. It features a filterable product grid and a product details view.

## Getting started

```
npm install
```

Installs the required packages. Then:

```
npm run android
```

or:

```
npm run ios
```

depending on your device/emulator. I developed this app with the help of my Android device with Android Studio installed and React Native CLI, following React's Native [development enviroment guide](https://reactnative.dev/docs/environment-setup).

## About the decision behind implementation details

### Extra packages

Because the styling in React Native is not exactly the same as with web development, I found it difficult to create a grid on my own, and I really didn't want to make a simple, ugly list, so I used [react-native-grid-component](https://www.npmjs.com/package/react-native-grid-component) for that layout.

I also used [apsl-react-native-button](https://www.npmjs.com/package/apsl-react-native-button) to be able to make a more attractive button with styling.

## Application structure

A note: I will list only relevant files not related to React Native CLI, just for ubicating ourselves.

```
assets/images/ - Contains the product images I used

src/
  App.js - Apps main component, where we wrap our components with the ProductContext and the navigator

  components/ - I made this folder for architecture purposes. It's suppose to contain generic reusable UI components

  contexts/ProductsContext.js - Context to share all our products throughout the app

  mock/products.js - Mocked products data

  pages/
    /product-list/ - Components related to the product list view/page
    /product-details/ - Components related to the product details view/page
```
