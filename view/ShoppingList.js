import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import ListView from '../controller/ListView';
import { Actions } from 'react-native-router-flux';

class shoppingList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions.sidemenu()}>
          <Image style={styles.burger}
                  source={require('../assets/img/menu.png')}/>
        </TouchableOpacity>
        <Text style={styles.back}
              onPress={() => Actions.homepage()}>
          Retour à l'acceuil
        </Text>
        <ListView></ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 70,
    //paddingLeft: 2,
    //paddingRight: 2,
    //backgroundColor: '#F0F0F0',
  },
  burger: {
    width: 24,
    height: 24,
  }
});

export default shoppingList;
