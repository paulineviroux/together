import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import ListView from './src/ListView';
import App from './view/index';

// class together extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <ListView></ListView>
//       </View>
//     );
//   }
// }

// var together = React.createClass({
//   render() {
//     return (
//       <View style={styles.container}>
//         <ListView></ListView>
//       </View>
//     );
//   }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
  }
});

AppRegistry.registerComponent('together', () => App);
