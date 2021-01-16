import React from 'react';
import {View, Text} from 'react-native';
import styles from '../CartBottomItem/styles';

const CartBottomItem = () => {
  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Total Price</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>$50</Text>
      </View>
      <View style={styles.buttonHeadContainer}>
        <View style={styles.buttonContainer}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff'}}>
            Checkout
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartBottomItem;
