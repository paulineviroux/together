import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
//import ListView from './src/ListView';
import Homepage from './Homepage';
import SideMenu from './SideMenu';

import tasksList from './TaskList';

import phoneBook from './PhoneBook';

import shoppingList from './ShoppingList';

import calendar from './Calendar';

import profile from './Profile';

import members from './Members';

import connexion from './Connexion';



const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}



const App = () => {
    return (
      <Router  navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} sceneStyle={styles.routerScene}>
        <Scene key="root">
          <Scene 
            key="tabbar"
            tabs
            tabBarStyle={{ backgroundColor: '#FFFFFF'}}>
   
              <Scene 
                key="homepage"
                component={Homepage}
                title="together"
                initial/>
              <Scene 
                key="sidemenu"
                component={SideMenu} hideNavBar/>
      
              <Scene 
                key="shopping"
                component={shoppingList}
                title="together"
                direction="fade"
              />
         
              <Scene 
                key="task"
                component={tasksList}
                title="together"
                direction="fade"
              />
   
              <Scene 
                key="phonebook"
                component={phoneBook}
                title="Together"
                direction="fade"
              />

              <Scene 
                key="calendar"
                component={calendar}
                title="together"
                direction="fade"
              />

              <Scene 
                key="profile"
                component={profile}
                title="together"
                direction="fade" // changer la transition au changement d'écran
              />

              <Scene 
                key="members"
                component={members}
                title="together"
                direction="fade"
              />

              <Scene 
                key="connexion"
                component={connexion}
                title="together"
                direction="fade"
              />
          </Scene>

        </Scene>
      </Router>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // a retirer
    paddingTop: 30,
    backgroundColor: '#F8F8F8',
  },
  navTitle: {
    color: '#ffffff',
    fontFamily: 'Raleway-Regular'
  },
  navBar: {
    backgroundColor: '#2FA8A4',
  },
  routerScene: {
    
  }
});

export default App;

