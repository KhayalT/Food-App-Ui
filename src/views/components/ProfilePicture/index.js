import React from 'react';
import {View, Image} from 'react-native';

const ProfilePicture = ({image, size = 50}) => {
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={{height: size, width: size, borderRadius: size}}
      />
    </View>
  );
};

export default ProfilePicture;
