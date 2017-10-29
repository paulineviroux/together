import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ScrollView, StyleSheet} from 'react-native';
import TodoModel from '../model/TodoModel';
import OmniBoxTask from './OmniBoxTask';
import SortableListView from 'react-native-sortable-listview';
import ListViewItem from './ListViewItem';
import Utils from '../src/Utils';
import TodoService from './TodoService';

let dataList = TodoService.findAllTasks();
var dataListOrder = getOrder(dataList);

function getOrder(list) {
  return Object.keys(list);
}

function moveOrderItem(listView, fromIndex, toIndex) {
  Utils.move(dataListOrder, parseInt(fromIndex), parseInt(toIndex));
  if (listView.forceUpdate) listView.forceUpdate();
} //pas super important

// View de la liste de taches
class TaskView extends Component {
  constructor(props) {
    super(props);
    this.updateDataList = this.updateDataList.bind(this);
    this._onCompletedChange = this._onCompletedChange.bind(this);
    this.state = {
      dataList: dataList
    }
  }

  updateDataList(dataList) {
    dataListOrder = getOrder(dataList);
    this.setState({
      dataList: dataList
    });
  }

  _onCompletedChange() {
    if (this.forceUpdate) this.forceUpdate();
  }

  render() {
    let listView = (<View></View>);
    if (this.state.dataList.length) {
      listView = (
        <SortableListView
          ref='taskView'
          style={{flex: 1}}
          data={this.state.dataList}
          order={dataListOrder}
          onRowMoved={e => moveOrderItem(this, e.from, e.to)}
          renderRow={(dataItem, section, index) => <ListViewItem data={dataItem} onCompletedChange={this._onCompletedChange}/>}
        />
      );
    }
//task view l 65 ??
    return (
        <ScrollView style={{flex: 1}}>
          <View style={{backgroundColor: '#F4F4F4', padding: 20}}>
            <OmniBoxTask
            data={Array.from(dataList)}
            updateDataList={this.updateDataList}/>
          </View>
          <View style={{paddingLeft: 20, paddingRight: 20}}>
            <Text style={styles.title}>Liste de tâches</Text>
             {listView}
          </View> 
        </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Raleway-Medium',
    fontSize: 20,
    paddingBottom: 8,
    paddingTop: 13,
    color: '#292929'
  }
})


module.exports = TaskView;