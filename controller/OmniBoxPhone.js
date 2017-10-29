import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import TodoModel from '../model/TodoModel';
import TodoService from './TodoService';
import Utils from '../src/Utils';

class OmniBoxPhone extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onChangeSecond = this.onChangeSecond.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    componentWillMount() {
        this.setState({
            newValue: '',
            newValue2: ''
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

    onChangeSecond(event){
        var title = event.nativeEvent.text;
        var dataList = this.props.data.filter((item) => item.title.match(new RegExp('.*' + title +'.*', 'gi')));
        this.setState({
            newValue2: title
        });
        this.props.updateDataList(dataList);
    }
    onChanged(text){
       var newText = '';
       var numbers = '0123456789';
       if(text.length < 1){
         this.setState({ newValue2: '' });
       }
       for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                 newText = newText + text[i];
            }
            this.setState({ newValue2: newText });
        }
    }


    onKeyPress(event){
        if (event.nativeEvent.key == 'Enter' && this.state.newValue) {
          var newDataItem = new TodoModel(`${this.state.newValue} : ${this.state.newValue2}`);

          var dataList = this.props.data;
          var dataItem = Utils.findTodo(newDataItem, dataList);
          if(dataItem) {
            Utils.move(dataList, (dataList.indexOf(dataItem)), 0);

            this.setState({
              newValue: '',
              newValue2: ''
            });
            this.props.updateDataList(dataList);
            return;
          }

          dataList.unshift(newDataItem);
          TodoService.saveNumber(newDataItem);

          this.setState({
            newValue: '',
            newValue2: ''
          });
          this.props.updateDataList(dataList);
        }
      }

    render() {
        return (
          <View>
            <TextInput style={{height: 36, padding: 10, marginBottom: 10, fontSize: 16, borderColor: '#eee', borderRadius: 16, backgroundColor: '#fff'}}
                  placeholder='Ajouter un numéro nom'
                  blurOnSubmit={false}
                  value={this.state.newValue}
                  onKeyPress={this.onKeyPress}
                  onChange={this.onChange}
                  onChangeText={(text1) => this.setState({text1})}>

            </TextInput>
            <TextInput style={{height: 36, padding: 10, marginBottom: 0, fontSize: 16, borderColor: '#eee', borderRadius: 16, backgroundColor: '#fff'}}
                  placeholder='Ajouter un numéro de téléphone'
                  blurOnSubmit={false}
                  value={this.state.newValue2}
                  onKeyPress={this.onKeyPress}
                  onChange={this.onChangeSecond}
                  //onChangeText={(text2) => this.setState({text2})}
                  onChangeText={(newValue2) => this.onChanged(newValue2)}>

            </TextInput>
          </View>
        );
    }
}

module.exports = OmniBoxPhone;