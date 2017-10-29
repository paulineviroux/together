import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import CalendarView from '../controller/CalendarView';
import { Actions } from 'react-native-router-flux';

// Lui attribuer une omnibox qui ajoutera des evenements. Les evenments seront lié à une date. Au clic de la date on apercoit l'élement. Si il y a un élement sur le jour, on entoure le jour, on lui donne un style.

class calendar extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => Actions.sidemenu()}>
                    <Image style={styles.burger}
                    source={require('../assets/img/menu.png')}/>
                </TouchableOpacity>
      <Text style={styles.back}
              onPress={() => Actions.homepage()}>
          Retour à l'acceuil
        </Text>
        <CalendarView></CalendarView>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    //backgroundColor: '#F8F8F8'
  },
  burger: {
    width: 24,
    height: 24,
        
  }
});

export default calendar;
