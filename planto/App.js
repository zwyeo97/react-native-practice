/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import { View, Text, Image, ScrollView, TextInput, SafeAreaView } from 'react-native';
import MainPage from './components/mainPage';
import {styles} from './css/style';
const App = () => {
  return (
      <View style={styles.container}>
        <MainPage></MainPage>
      </View>
  );
}




export default App;