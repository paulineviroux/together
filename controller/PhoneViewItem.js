import React, {Component} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import TodoService from './TodoService';

class PhoneViewItem extends Component {
  constructor(props) {
    super(props);
    this._onCheckBoxPressed = this._onCheckBoxPressed.bind(this);
    this.state = {
      data: this.props.data
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: props.data
    })
  }

  _onCheckBoxPressed() {
    var data = this.state.data;
    TodoService.update(data, () => {
      data.completed = !data.completed;
    });
    this.setState({
       data: data
    });

    this.props.onCompletedChange();
  }

  render() {
    let data = this.state.data;
    let color = data.completed ? '#C5C8C9' : '#000';
    return (
      <TouchableHighlight underlayColor={'#eee'} style={styles.TouchableHighlight} {...this.props.sortHandlers}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{fontSize:18, color: color, fontFamily: 'Raleway-Regular'}}>{`\u2022 ${data.title}`}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

var styles = StyleSheet.create({
  TouchableHighlight: {
    paddingTop: 6, 
    paddingBottom: 6, 
    backgroundColor: "#F8F8F8", 
    borderBottomWidth:1, 
    borderColor: '#eee'
  }
})

module.exports = PhoneViewItem;