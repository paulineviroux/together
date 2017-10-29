import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class profile extends Component {
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
        <Text>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 80,
    backgroundColor: '#F8F8F8',
  },
  burger: {
    width: 24,
    height: 24,
  }
});

export default profile;
