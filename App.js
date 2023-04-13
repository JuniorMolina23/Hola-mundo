import React from "react";
import {Text, View, StyleSheet,Image, TouchableOpacity, Alert, TextInput} from 'react-native'

const App = () =>{
  return(
    <View style={styles.container}>
      <Image
        source={{uri:'https://1000marcas.net/wp-content/uploads/2022/06/ACME-logo.png'}}
        style={styles.image}
      />
      <TextInput
        style={styles.text}
        placeholder="Usuario"
      />
      <TextInput
        style={styles.text}
        placeholder="Contraseña"
      />
      <TouchableOpacity
        onPress={() => console.log('Estas intentado ingresar!')}
        style={styles.button}
      >
        <Text style={styles.buttonText} >Ingresar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'Center',
    alignItems:'center',
  },
  image: {height:200, width:300},
  button:{
    backgroundColor:'#252525',
    padding:15,
    marginTop:10,
    borderRadius:10

  },
  buttonText:{
    color: "white", fontSize:20
  },
  text:{
    height: 40,
    backgroundColor:'#fff',
    borderColor: 'gray', 
    borderWidth: 1, 
    margin: 10,
    textAlign:'center',
    borderRadius:10
  }
});

export default App;