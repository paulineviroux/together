import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ScrollView} from 'react-native';

import Utils from '../src/Utils';


let Connect = {
  onPressConnect: function() {
    fetch('https://testreact.sruon.be/test2.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    })
  }
}

module.exports = Connect;