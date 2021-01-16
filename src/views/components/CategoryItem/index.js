import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import COLORS from '../../../constant/colors';

const CategoryItem = props => {
  const category = props.category;
  const color = props.color;
  return (
    <View
      style={{
        backgroundColor: props.color,
        width: 140,
        height: 50,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
      }}
    >
      <View style={styles.imageContainer}>
        <Image source={category.image} style={styles.image} />
      </View>
      <View>
        <Text
          style={{
            marginLeft: 15,
            fontSize: 16,
            color: props.color === COLORS.primary ? '#fff' : 'grey',
            fontWeight: 'bold',
          }}
        >
          {category.name}
        </Text>
      </View>
    </View>
  );
};

export default CategoryItem;
