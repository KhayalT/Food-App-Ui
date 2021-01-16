import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CartItem = props => {
  const food = props.food;
  const [number, setNumber] = useState (1);

  const decrease = () => {
    if (number >= 2) {
      setNumber (number - 1);
    }
  };

  const increase = props => {
    setNumber (number + props);
  };

  const navigation = useNavigation ();

  const onPress = () => {
    navigation.navigate ('Details', {name: 'Mack Chicken'});
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={food.image} style={styles.image} />
      </View>
      <TouchableOpacity
        onPress={() => {
          onPress ();
        }}
      >
        <View style={styles.rightContainer}>
          <Text numberOfLines={2} style={styles.text1}>
            {food.name}
          </Text>
          <Text numberOfLines={1} style={styles.text2}>{food.ingredients}</Text>
          <Text numberOfLines={1} style={styles.text3}>${food.price}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{number}</Text>
        <View style={styles.numberContainer}>
          <Text
            style={styles.numberText}
            onPress={() => {
              decrease ();
            }}
            onLongPress={() => decrease (10)}
          >
            —
          </Text>
          <Text
            style={styles.numberText}
            onPress={() => {
              increase (1);
            }}
            onLongPress={() => {
              increase (10);
            }}
          >
            +
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
