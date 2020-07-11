import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Biases extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Overcoming Biases</Text>
      </View>
    );
  }
}

export default Biases;
