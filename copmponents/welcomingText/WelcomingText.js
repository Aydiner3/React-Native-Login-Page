import React, {useState} from 'react';
import {Text, StyleSheet,View} from 'react-native';

const WelcomingText = () => {
  const [titleText, setTitleText] = useState("Merhaba Hoşgeldiniz");
  const bodyText = 'Hesabınıza giriş yapın yada kaydolun.';

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <>
    <View style={styles.container}>
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    marginLeft:20,
    marginTop:30,
    marginBottom:20,
  },

  baseText: {
    fontFamily: 'Cochin',
    color:'gray',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
  },
  
});

export default WelcomingText;