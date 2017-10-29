import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            data: props.data
        });
    }

    render() {
        let iconName = this.state.data.completed ? 'check-box' : 'check-box-outline-blank';
        let color = this.props.color || '#292929';

        return (
            <Icon.Button 
                data={this.state.data}
                name={iconName}
                backgroundColor= 'rgba(0, 0, 0, 0)'
                color={color}
                underlayColor='rgba(0, 0, 0, 0)'
                size={22}
                iconStyle={{marginLeft: -7.5, marginRight: 0}}
                activeOpacity={1}
                borderRadius={5}
                onPress={this.props.onCheckBoxPressed}
            >
            </Icon.Button>
        );
    }
}

module.exports = CheckBox;