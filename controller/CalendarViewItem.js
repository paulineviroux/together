import React, {Component} from 'react';
import {TouchableHighlight, View, Text, StyleSheet, ScrollView} from 'react-native';
import TodoService from './TodoService';

class CalendarViewItem extends Component {
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
        <ScrollView style={{flexDirection: 'row'}}> 
          <Text style={{fontSize:18, color: '#292929', fontFamily: 'Raleway-Regular'}}>{`${data.title}`}</Text> 
        </ScrollView>
      </TouchableHighlight>
    )
  }
}

var styles = StyleSheet.create({
  TouchableHighlight: {
    paddingTop: 8, 
    paddingBottom: 8,
    //borderBottomWidth: 1, 
    //borderColor: '#f5f5f5'
    borderTopColor: 'rgba(138, 138, 138, 0.2)',
    borderTopWidth: 0.5
  }
})

module.exports = CalendarViewItem;