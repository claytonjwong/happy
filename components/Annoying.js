import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Annoying extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Annoying Features of the Mind</Text>
      </View>
    );
  }
}

export default Annoying;
