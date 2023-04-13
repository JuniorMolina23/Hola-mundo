import React from "react";
import {Text, View, StyleSheet,Image, TouchableOpacity, Alert, TextInput} from 'react-native'

const App = () =>{
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Hola Amigo!</Text>
      <Image
        source={{uri:'https://picsum.photos/200/300'}}
        style={styles.image}
      />
      <TextInput
        style={styles.text}
        placeholder="Escribe Aqui"
      />
      <TouchableOpacity
        onPress={() => Alert.alert('Hola amigo')}
        style={styles.button}
      >
        <Text style={styles.buttonText} >Presione Aqui</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'Center',
    alignItems:'center',
    backgroundColor:'#292929'
  },
  title:{ fontSize: 30, color:'#fff'},
  image: {height:200, width:300, borderRadius:90},
  button:{
    backgroundColor:'blue',
    padding:7,
    marginTop:10
  },
  buttonText:{
    color: "#fff", fontSize:20
  },
  text:{
    height: 40,
    backgroundColor:'#fff',
    borderColor: 'gray', 
    borderWidth: 1, 
    margin: 10 
  }
});

export default App;