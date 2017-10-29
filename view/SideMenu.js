import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const SideMenu = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.group}>
                    {'Grammar'.toUpperCase()}
                </Text>
                <Text style={styles.menuClose}
                    onPress={() => Actions.homepage()}>
                    <Icon style={styles.icone} name="times" size={20} color="#ffffff" />
                </Text>
            </View>    
            
            <View style={styles.containerPictures}>
                <View style={styles.containerProfiles}>
                    <View style={styles.containerProfile}>
                        <Image style={[styles.picture, styles.picture1]}
                            source={require('../assets/img/profile1.png')}/>
                        <Text style={styles.name}>Angela Grammar</Text>
                    </View>
                    <View style={styles.containerProfile}>
                        <Image style={[styles.picture, styles.picture2]} 
                                source={require('../assets/img/profile2.png')}/>
                        <Text style={styles.name}>Carla Grammar</Text>
                    </View>
                    
                    <View style={styles.containerProfile}>
                        <Image style={[styles.picture, styles.picture3]}
                            source={require('../assets/img/profile3.png')}/>
                        <Text style={styles.name}>Jane Grammar</Text>
                    </View>            
                </View>
                <View style={styles.containerProfiles}>
                    <View style={styles.containerProfile}>
                        <Image style={[styles.picture, styles.picture4]}
                            source={require('../assets/img/profile4.png')}/>
                        <Text style={styles.name}>Noah Grammar</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerMenu}>
                <Text 
                    onPress={() => Actions.shopping()}
                    style={styles.menuItem}>
                    <Icon style={styles.icone} name="shopping-cart" size={18} color="#ffffff" />  Liste de courses
                </Text>
                <Text 
                    onPress={() => Actions.task()}
                    style={styles.menuItem}>
                    <Icon style={styles.icone} name="list-ul" size={18} color="#ffffff" />  Liste de tâches
                </Text>
                <Text 
                    onPress={() => Actions.calendar()}
                    style={styles.menuItem}>
                    <Icon style={styles.icone} name="calendar" size={18} color="#ffffff" />  Calendrier
                </Text>
                <Text 
                    onPress={() => Actions.phonebook()}
                    style={styles.menuItem}>
                    <Icon style={styles.icone} name="phone" size={18} color="#ffffff" />   Annuaire
                </Text>
                <Text 
                    onPress={() => Actions.members()}
                    style={styles.menuItem}>
                    <Icon style={styles.icone} name="users" size={18} color="#ffffff" />  Membres
                </Text>
                <Text 
                    onPress={() => Actions.connexion()}
                    style={styles.menuItem}>
                    <Icon style={styles.icone} name="users" size={18} color="#ffffff" />  Connexion
                </Text>
                
            
            </View>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'flex-start',
        backgroundColor: '#110E38',
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
    },
    containerHeader: {
        flexDirection: 'row',
        //justifyContent: 'flex-end',
        alignItems: 'center',
        width: width - 60,
        flex: 1,
        paddingBottom: 15
    },
    menuClose: {
        color: '#ffffff',
        justifyContent: 'flex-end',
        flex: 1
    },
    group: {
        color: '#ffffff',
        fontSize: 24 ,
        fontFamily: 'Raleway-SemiBold',
        textAlign: 'center',
        flex: 10
    },
    menuItem: {
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'Raleway-Regular',
        paddingBottom: 20
    },
    picture: {
        width: 76,
        height: 76,
        borderWidth: 5,
        borderRadius: 38 
    },
    picture1: {
        borderColor: '#E4C44C'
    },
    picture2: {
        borderColor: '#09AF96'
    },
    picture3: {
        borderColor: '#A40D55'
    },
    picture4: {
        borderColor: '#7DA40D'
    },
    containerMenu: {
        //backgroundColor: 'blue',
        flex: 4,
        paddingTop: 20
    },
    containerPictures: {
        //backgroundColor: 'pink',
        //alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: width - 60,
        flex: 4
    },
    containerProfiles: {
        justifyContent: 'space-between',
        //alignItems: 'center',
        flexDirection: 'row',
        //backgroundColor: 'violet'
        //width: width
        marginBottom: 15 
    },
    containerProfile: {
        //backgroundColor: 'red',
        alignItems: 'center',
        //justifyContent: 'space-around'
    },
    name: {
        color: '#ffffff',
        backgroundColor: 'transparent',
        width: 80,
        textAlign: 'center',
        paddingTop: 5,
        fontFamily: 'Raleway-Regular'
    }
});

export default SideMenu;
