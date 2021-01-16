import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';
import COLORS from '../../../constant/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FoodItem = props => {
  const food = props.foods;

  const navigation = useNavigation ();

  const onPress = () => {
    navigation.navigate ('Details', {name: 'Meat Lahmacun', liked: false});
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={food.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <TouchableOpacity
          onPress={() => {
            onPress ();
          }}
        >
          <Text numberOfLines={1} style={styles.text1}>
            {food.name}
          </Text>
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.text2}>{food.ingredients}</Text>
        <Text numberOfLines={1} style={styles.text3}>$ {food.price}</Text>
        <View style={styles.iconContainer}>
          <AntDesign name="pluscircle" color={COLORS.primary} size={30} />
        </View>
      </View>
    </View>
  );
};

export default FoodItem;
