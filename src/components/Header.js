import React, { Component } from "react";
import { View, Text } from 'react-native';

export default class Header extends Component{
  render() {
    return(
      <>
        <View style={{ backgroundColor: 'gray', padding: 10 }}>
          <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>ToDo App</Text>
        </View>
      </>
    )
  }
}

