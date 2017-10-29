import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';



class Homepage extends Component {
    constructor(props) {
    super(props);
    this.state = {}
    this.onDayPress = this.onDayPress.bind(this);
  }
    render() {
        return (
            
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={() => Actions.sidemenu()}>
                    <Icon style={styles.icone} name="bars" size={20} color="#292929" />
                </TouchableOpacity>
                <TouchableHighlight style={styles.redirectionContainer1} onPress={() => Actions.shopping()} underlayColor={'transparent'}>
                    <Text style={styles.redirection}>
                        <Icon style={styles.icone} name="shopping-cart" size={18} color="#E2970F" />  Liste de courses  <Icon style={styles.icone} name="angle-right" size={18} color="#292929" /> 
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.redirectionContainer2} onPress={() => Actions.task()} underlayColor={'transparent'}>
                    <Text style={styles.redirection}>
                        <Icon style={styles.icone} name="list-ul" size={18} color="#E2970F" />  Liste de tâches  <Icon style={styles.icone} name="angle-right" size={18} color="#292929" /> 
                    </Text>
                </TouchableHighlight>
                <View style={styles.redirectionContainer3}>
                    <Calendar
                        onDayPress={this.onDayPress}
                        style={styles.calendar}
                        hideExtraDays
                        selected={[this.state.selected]}/>
                    <TouchableHighlight style={styles.addEvent} onPress={() => Actions.calendar()} underlayColor={'transparent'}>
                        <Text style={styles.redirection}>
                            <Icon style={styles.icone} name="plus-circle" size={18} color="#E2970F" />  Ajouter un évènement
                        </Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
    onDayPress(day) {
    this.setState({
      selected: day
    });
  }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        backgroundColor: '#f4f4f4'
    },
    redirection: {
        fontSize: 18,
        color: '#292929',
        fontFamily: 'Raleway-Regular'
    },
    redirectionContainer1: {
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30

    },
    redirectionContainer2: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        //alignItems: 'flex-start',
        paddingLeft: 20,
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30
    },
    redirectionContainer3: {
        flex: 5,
        backgroundColor: '#f4f4f4'
    },
    burger: {
        width: 24,
        height: 24,
        
    },
    calendar: {
        flex: 3,
        backgroundColor: '#f4f4f4',
        //paddingBottom: 50,
        paddingLeft: 8, // A voir
        paddingRight: 8,
        paddingBottom: 10
    },
    addEvent: {
        //flex: 1,
        marginLeft: 20,
        marginRight: 20,
        borderTopColor: 'rgba(138, 138, 138, 0.2)',
        borderTopWidth: 0.5,
        paddingTop: 15
    }
});

export default Homepage;