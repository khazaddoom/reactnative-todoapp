import React from 'react';
import { View, Text, CheckBox } from 'react-native';

export default class ToDo extends React.Component {

    state = {
        isChecked: false
    }

    render() {
        return(
            <View >
                <CheckBox 
                    style={{ flex: 0}}
                    onClick={() => this.setState({ isChecked: !isChecked}) }
                    isChecked={this.state.isChecked}
                />
                <Text>{ this.props.tododata.title }</Text>
            </View>
        );
    }

}