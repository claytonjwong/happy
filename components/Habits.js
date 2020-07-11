import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Habits extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={{ margin: 30 }}>
          Better Habits
        </Text>
      </View>
    );
  }
}

export default Habits;
