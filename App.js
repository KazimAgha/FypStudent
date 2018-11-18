import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Map from './Map';
export default class App extends Component {
  render() {
    return <MyNavigator />;
  }
}

const MyNavigator = StackNavigator({
  Home: {
    screen: Login,
    navigationOptions: props => ({
      title: 'Home',
    }),
  },
  Map: {
    screen: Map,
    navigationOptions: props => ({
      title: 'Map',
    }),
  },
});
