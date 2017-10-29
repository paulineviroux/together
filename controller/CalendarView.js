import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';
import TodoModel from '../model/TodoModel';
import EventModel from '../model/EventModel';
import OmniBoxCalendar from './OmniBoxCalendar';
import CalendarViewItem from './CalendarViewItem';
import SortableListView from 'react-native-sortable-listview';
import Utils from '../src/Utils';
import TodoService from './TodoService';
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.']
};

LocaleConfig.defaultLocale = 'fr';


let dataList = TodoService.findAllEvent(); // ? 
var dataListOrder = getOrder(dataList);



function getOrder(list) {
  return Object.keys(list);
}

function moveOrderItem(listView, fromIndex, toIndex) {
  Utils.move(dataListOrder, parseInt(fromIndex), parseInt(toIndex));
  if (listView.forceUpdate) listView.forceUpdate();
} //pas super important

class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.updateDataList = this.updateDataList.bind(this);
    this._onCompletedChange = this._onCompletedChange.bind(this);
    this.state = {
      dataList: dataList
    }
    this.onDayPress = this.onDayPress.bind(this);
  }

  updateDataList(dataList) {
    dataListOrder = getOrder(dataList);
    this.setState({
      dataList: dataList
    });
  }

  setSelectedDay(day){
    day = this.state.selected;
  }

  getMarkedDate(){
    var markedDate = {}
    var date = Array.from(this.state.dataList);
    
    for (var i = this.state.dataList.length - 1; i >= 0; i--) {
      var eDate = new Date(date[i].eventDate);
      markedDate['2017-05-16'] = [true];
    }
    console.log(markedDate);
    return markedDate;
  }

  _onCompletedChange() {
    if (this.forceUpdate) this.forceUpdate();
  }

  render() {
    let listView = (<ScrollView></ScrollView>);
    if (this.state.dataList.length) {
      listView = (
        <SortableListView
          ref='calendarView'
          style={{flex: 1, paddingLeft: 20, paddingRight: 20}}
          data={this.state.dataList}
          order={dataListOrder}
          onRowMoved={e => moveOrderItem(this, e.from, e.to)}
          renderRow={(dataItem, section, index) => <CalendarViewItem data={dataItem} onCompletedChange={this._onCompletedChange}/>}
        />
      );
    }

    return (
        <ScrollView style={{flex: 1}}>
          <View style={{backgroundColor: '#f4f4f4', padding: 20}}>
            <OmniBoxCalendar
              data={Array.from(dataList)}
              updateDataList={this.updateDataList}
              selected={this.state.selected}/>
          </View>
          <View>
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              selected={[this.state.selected]}
              markedDates={this.getMarkedDate()}
            />
            {listView}
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
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: 'transparent',
    //borderTopColor: 'transparent'
    //height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    //backgroundColor: '#f4f4f4'
  },
  container: {
    flex: 1,
    backgroundColor: '#eee'
  }
});

export default CalendarView;