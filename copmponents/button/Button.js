import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const Button=()=> {
    
  return (
    <Pressable style={styles.button} >
      <Text style={styles.buttonText}>Giriş Yapmadan Devam Et</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#dddddd',
        width:350,
        marginLeft:30,
        bottom:-260,
        
        
        
      },
      buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
});

export default Button;