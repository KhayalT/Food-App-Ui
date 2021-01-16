import React from 'react';
import {View, Text, Button} from 'react-native';
import FoodList from '../components/FoodList';

export default function HomeScreen () {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <FoodList />
    </View>
  );
}
