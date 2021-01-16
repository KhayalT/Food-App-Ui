import React from 'react';
import {View} from 'react-native';
import Details from '../components/Details';

export default function HomeScreen({route}) {
  const {name, liked} = route.params;
  return (
    <View style={{flex: 1}}>
      <Details name={route.params.name} liked={route.params.liked} />
    </View>
  );
}
