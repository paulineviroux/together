import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button
} from 'react-native';
import ListView from '../controller/ListView';
import Connect from '../controller/Connect';
import { Actions } from 'react-native-router-flux';
import TodoService from '../controller/TodoService';

class connexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };

  };


  // importData(json) {
    
  // };

  onPressConnect() {
    console.log(this.state.login);
     console.log(this.state.password);
    console.log('coucou');
    fetch(`https://testreact.sruon.be/testOli/checkConnectUser.php?login=${this.state.login}&password=${this.state.password}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })

  .then(function(response) {
    
    console.log(response.json())
    response.json().tasks.map(function(item){TodoService.saveTasks(item)})

    }, function(error) {
    error.message  
    }) //=> String
  console.log('fini');
  }





  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions.sidemenu()}>

        </TouchableOpacity>
        <Text style={styles.back}
              onPress={() => Actions.homepage()}>
          Retour à l'acceuil
        </Text>
        <Text>Connexion</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
         onChangeText={(text) => this.setState({login:text})}
        //onChangeText={(text) => this.setState({text})}
        //onChange={this.onChange}
        //value={this.state.text}
        placeholder="E-mail"
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
        //onChangeText={(text1) => this.setState({text1})}
        //value={this.state.text1}
        onChangeText={(text) => this.setState({password:text})}
        placeholder="Password"
      />
      <Button
      onPress={() => this.onPressConnect()}
      title="Envoyer"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 80,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
  }
});

export default connexion;
