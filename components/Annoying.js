import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Annoying extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={{ margin: 30 }}>
          Annoying Features of the Mind
        </Text>
      </View>
    );
  }
}

export default Annoying;
