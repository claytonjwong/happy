import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={{ margin: 30 }}>
          Main Component
        </Text>
      </View>
    );
  }
}

export default Main;
