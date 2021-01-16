import React from 'react';
import {View, Text, FlatList} from 'react-native';
import FoodItem from '../FoodItem';
import foods from '../../../constant/foods';
import styles from '../FoodList/styles';
import CategoryList from '../CategoryList';

const FoodList = () => {
  renderItem = ({item}) => <FoodItem foods={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns="2"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <CategoryList />}
      />
    </View>
  );
};

export default FoodList;
