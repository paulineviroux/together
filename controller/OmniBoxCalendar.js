import React, { Component } from 'react';
import { TextInput } from 'react-native';
import TodoModel from '../model/TodoModel';
import EventModel from '../model/EventModel';
import TodoService from './TodoService';
import Utils from '../src/Utils';

class OmniBoxCalendar extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    componentWillMount() {
        this.setState({
            newValue: ''
        });
    }

    onChange(event){
        var title = event.nativeEvent.text;
        var dataList = this.props.data.filter((item) => item.title.match(new RegExp('.*' + title +'.*', 'gi')));
        this.setState({
            newValue: title
        });
        this.props.updateDataList(dataList);
    }

    onKeyPress(event){
        if (event.nativeEvent.key == 'Enter' && this.state.newValue) {

          console.log(this.props.selected);

          var newDataItem = new EventModel(this.state.newValue, new Date(this.props.selected.timestamp));

          var dataList = this.props.data;
          var dataItem = Utils.findTodo(newDataItem, dataList);
          if(dataItem) {
            Utils.move(dataList, (dataList.indexOf(dataItem)), 0);

            this.setState({
              newValue: ''
            });
            this.props.updateDataList(dataList);
            return;
          }

          dataList.unshift(newDataItem);
          TodoService.saveEvent(newDataItem);

          this.setState({
            newValue: ''
          });
          this.props.updateDataList(dataList);
        }
      }

    render() {
        return (
          <TextInput style={{height: 36, padding: 10, marginBottom: 0, fontSize: 16, borderColor: '#eee', borderRadius: 18, backgroundColor: '#fff'}}
                placeholder='Ajouter un évènement'
                blurOnSubmit={false}
                value={this.state.newValue}
                onKeyPress={this.onKeyPress}
                onChange={this.onChange}>
          </TextInput>
        );
    }
}

module.exports = OmniBoxCalendar;