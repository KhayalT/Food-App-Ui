import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';
import COLORS from '../../../constant/colors';

const Details = params => {
  const name = params.name;
  const liked = params.liked;

  const [like, setLike] = useState (false);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require ('../../../assets/cheesePizza.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContentContainer}>
          <View style={styles.bottomContentContainerTop}>
            <Text numberOfLines={2} style={styles.nameText}>
              {params.name}
            </Text>
            <View style={styles.heartIcon}>
              <AntDesign
                name={like ? 'heart' : 'hearto'}
                color={COLORS.primary}
                size={27}
                onPress={() => setLike (like => !like)}
              />
            </View>
          </View>
          <View style={styles.bottomDescContainer}>
            <Text numberOfLines={7} style={styles.descText}>
              There are many variations of passages of Lorem Ipsum available,  sad sad asd as das d but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </Text>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;
