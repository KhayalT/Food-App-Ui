import React from 'react';
import {View, Text, FlatList} from 'react-native';
import foods from '../../../constant/foods';
import CartItem from '../CartItem';
import CartBottomItem from '../CartBottomItem';

const CartList = () => {
  return (
    <View>
      <FlatList
        data={foods}
        renderItem={({item}) => <CartItem food={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <CartBottomItem />}
      />
    </View>
  );
};
export default CartList;
