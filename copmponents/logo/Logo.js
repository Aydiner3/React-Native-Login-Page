import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    justifyContent:'center',
    alignItems:'center',

  },
  tinyLogo: {
    width: 240,
    height: 75,
  },
 
});

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../statics/image/pngegg.png')}
      />
    </View>
  );
};

export default Logo;