import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class members extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      <ScrollView style={styles.containerMembers}>
        <TouchableOpacity onPress={() => Actions.sidemenu()}>
          <Image style={styles.burger}
                  source={require('../assets/img/menu.png')}/>
        </TouchableOpacity>
        <Text style={styles.back}
              onPress={() => Actions.homepage()}>
          Retour à l'acceuil
        </Text>
        <Text style={styles.groupName}>{'Grammar'.toUpperCase()}</Text>
        <Text style={styles.span}>Membres du groupe Grammar</Text>
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
          </ScrollView>
          <View style={styles.containerAdd}>
            <Text style={styles.addMember}>Ajouter un membre au groupe</Text>
            <Text style={styles.explication}>La personne reçevra un e-mail avec un lien l'invitant a s'inscrire et rejoindre le groupe.</Text>
          </View>     
      </ScrollView>
    );
  }
}
// taille img à réduire!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#F8F8F8',
  },
  burger: {
    width: 24,
    height: 24,
  },
  picture: {
    width: 80,
    height: 80,
    borderWidth: 6,
    borderRadius: 40 
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
  containerPictures: {
    //alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: width - 40,
    //flex: 4
  },
  containerProfiles: {
    justifyContent: 'space-between',
    //alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15
    //width: width 
  },
  containerProfile: {
    alignItems: 'center',
    //justifyContent: 'space-around'
  },
  name: {
    color: '#292929',
    backgroundColor: 'transparent',
    width: 80,
    textAlign: 'center',
    paddingTop: 5,
    fontFamily: 'Raleway-Medium'
  },
  containerAdd: {
    backgroundColor: '#f4f4f4',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 20
  }, 
  containerMembers: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10
  },
  groupName: {
    fontSize: 24,
    fontFamily: 'Raleway-Bold',
    paddingBottom: 8
  },
  span: {
    fontFamily: 'Raleway-Light',
    fontSize: 16,
    paddingBottom: 12
  },
  addMember: {
    fontFamily: 'Raleway-Medium',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  },
  explication: {
    fontFamily: 'Raleway-Regular',
    fontSize: 14
  }
});

export default members;
