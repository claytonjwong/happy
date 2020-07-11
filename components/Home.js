import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='Annoying Features of the Mind'
        onPress={() => navigation.navigate('Annoying')}
      />
      <Button
        title='Overcome Biases'
        onPress={() => navigation.navigate('Biases')}
      />
      <Button
        title='Better Habits'
        onPress={() => navigation.navigate('Habits')}
      />
      <Button
        title='Rewirements'
        onPress={() => navigation.navigate('Rewirements')}
      />
      <Button
        title='Wanting'
        onPress={() => navigation.navigate('Wanting')}
      />
    </View>
  );
};

export default Home;
