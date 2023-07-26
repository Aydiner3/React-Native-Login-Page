import React from 'react';
import { StyleSheet, TextInput,Pressable,Text,OpenURLButton,Linking} from 'react-native';


const InputArea = () => {
  const [number, onChangeNumber] = React.useState('');



  return (
    <>
      <TextInput
        
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Telefon Numaranız"
        keyboardType="numeric"
        inlineImageLeft=''
      />
      <Pressable style={styles.button} >
        <Text style={styles.buttonText}>Devam Et</Text>
      </Pressable>

      <Text style={styles.text}>
        Bir hesabınız yok mu ? 
        <Text style={styles.linkText} onPress={() => Linking.openURL("https://www.google.com")}>
          Kayıt Ol
        </Text>
      </Text >
        
      
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    marginBottom:30,
    borderRadius:10,
    borderColor:'gray',
   
  },

  button: {
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'green',
    width:350,
    marginLeft:30,
    
    
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  text: {
    textAlign:'center',
    marginTop:12,
  },
  linkText: {
    color: 'blue',
  }
});

export default InputArea;