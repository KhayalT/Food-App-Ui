import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';

const HeaderTop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.text1}>Hello,</Text>
          <Text numberOfLines={1} style={styles.text2}>Khayal</Text>
        </View>
        <Text style={styles.text3}>What do you want today?</Text>
      </View>
      <View style={styles.rightContainer}>
        <ProfilePicture
          image={
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
          size={60}
        />
      </View>
    </View>
  );
};

export default HeaderTop;
