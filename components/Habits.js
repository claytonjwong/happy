import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Habits extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Better Habits</Text>
      </View>
    );
  }
}

export default Habits;
