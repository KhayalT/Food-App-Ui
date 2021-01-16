import React from 'react';
import {View, Text, Touchable} from 'react-native';
import styles from './styles';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const SearchHeader = () => {
  const navigation = useNavigation ();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate ('Search')}>
        <View style={styles.leftContainer}>
          <FontAwesome name="search" size={25} />
          <Text style={styles.text}>
            Search for Food
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.filterContainer}>
        <MaterialCommunityIcons
          name="filter-variant"
          size={40}
          color="white"
          onPress={() => console.warn ('Pressed Filter Icon')}
        />
      </View>
    </View>
  );
};

export default SearchHeader;
