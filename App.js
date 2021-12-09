import * as React from 'react';
import {Image, Text, View, StyleSheet, Button,TouchableOpacity,TextInput } from 'react-native';
import { Card } from 'react-native-paper';


export default function App() {
  
  return (

    

     <TouchableOpacity onPress={() => alert('Estos son los stats de tu jugador')} style={styles.button}>
   <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
     <View style={styles.container} >
         <Card style={{backgroundColor:'gold',   margin:30}} >
   
       <View style={{
          alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',fontSize: 30,
       }} >"Nombre jugador"</View>
         <TextInput
          style={{ width: 150, fontSize: 20,  justifyContent: 'center' }}
          underlineColorAndroid="black"
          placeholder="Equipo"     
        />
         <View style={styles.container}>
      <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8v_ymxRSlQLcIru1edUxL394jb5cIjjeqA&usqp=CAUTkIrScD.png" }} style={{ width: 200, height: 200 }} />   
    </View> 
       <View style={styles.button}>
        <View style={ {width: 150, fontSize: 30,  justifyContent: 'center'} }>Velocidad</View>
        <View style={ {width: 100, fontSize: 40,  justifyContent: 'center'}}>0</View>
         <View style={ { alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee',} }>+</View>
        <View style={ {  alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>-</View>
        </View>
          
           <View style={styles.button}>
        <View style={ {width: 150, fontSize: 40,  justifyContent: 'center'} }>Tiro</View>
        <View style={ {width: 100, fontSize: 40,  justifyContent: 'center'}}>0</View>
         <View style={ { alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee',} }>+</View>
        <View style={ {  alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>-</View>
        </View>

        <View style={styles.button}>
        <View style={ {width: 150, fontSize: 40,  justifyContent: 'center'} }>Pase</View>
        <View style={ {width: 100, fontSize: 40,  justifyContent: 'center'}}>0</View>
         <View style={ { alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee',} }>+</View>
        <View style={ {  alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>-</View>
        </View>

         <View style={styles.button}>
        <View style={ {width: 150, fontSize: 40,  justifyContent: 'center'} }>Defensa</View>
        <View style={ {width: 100, fontSize: 40,  justifyContent: 'center'}}>0</View>
         <View style={ { alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee',} }>+</View>
        <View style={ {  alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>-</View>
        </View>
         <View style={styles.button}>

        <View style={ {  alignItems: 'center',width: 300,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>Agregar</View>
        </View>
</Card>

  <Card style={{backgroundColor:'gold',   margin:30}} >
   
       <View style={{
          alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',fontSize: 30,
       }} >"Nombre jugador"</View>
         <TextInput
          style={{ width: 150, fontSize: 20,  justifyContent: 'center' }}
          underlineColorAndroid="black"
          placeholder="Equipo"     
        />
         <View style={styles.container}>
      <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8v_ymxRSlQLcIru1edUxL394jb5cIjjeqA&usqp=CAUTkIrScD.png" }} style={{ width: 200, height: 200 }} />   
    </View> 
       <View style={styles.button}>
        <View style={ {width: 150, fontSize: 30,  justifyContent: 'center'} }>Velocidad</View>
        <View style={ {width: 100, fontSize: 40,  justifyContent: 'center'}}>0</View>
         <View style={ { alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee',} }>+</View>
        <View style={ {  alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>-</View>
        </View>
          
           <View style={styles.button}>
        <View style={ {width: 150, fontSize: 40,  justifyContent: 'center'} }>Tiro</View>
        <View style={ {width: 100, fontSize: 40,  justifyContent: 'center'}}>0</View>
         <View style={ { alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee',} }>+</View>
        <View style={ {  alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>-</View>
        </View>

        <View style={styles.button}>
        <View style={ {width: 150, fontSize: 40,  justifyContent: 'center'} }>Pase</View>
        <View style={ {width: 100, fontSize: 40,  justifyContent: 'center'}}>0</View>
         <View style={ { alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee',} }>+</View>
        <View style={ {  alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>-</View>
        </View>

         <View style={styles.button}>
        <View style={ {width: 150, fontSize: 40,  justifyContent: 'center'} }>Defensa</View>
        <View style={ {width: 100, fontSize: 40,  justifyContent: 'center'}}>0</View>
         <View style={ { alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee',} }>+</View>
        <View style={ {  alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>-</View>
        </View>
         <View style={styles.button}>

        <View style={ {  alignItems: 'center',width: 300,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>Agregar</View>
        </View>
</Card>
  <Card style={{backgroundColor:'gold',   margin:30}} >
   
       <View style={{
          alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',fontSize: 30,
       }} >"Nombre jugador"</View>
         <TextInput
          style={{ width: 150, fontSize: 20,  justifyContent: 'center' }}
          underlineColorAndroid="black"
          placeholder="Equipo"     
        />
         <View style={styles.container}>
      <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8v_ymxRSlQLcIru1edUxL394jb5cIjjeqA&usqp=CAUTkIrScD.png" }} style={{ width: 200, height: 200 }} />   
    </View> 
       <View style={styles.button}>
        <View style={ {width: 150, fontSize: 30,  justifyContent: 'center'} }>Velocidad</View>
        <View style={ {width: 100, fontSize: 40,  justifyContent: 'center'}}>0</View>
         <View style={ { alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee',} }>+</View>
        <View style={ {  alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>-</View>
        </View>
          
           <View style={styles.button}>
        <View style={ {width: 150, fontSize: 40,  justifyContent: 'center'} }>Tiro</View>
        <View style={ {width: 100, fontSize: 40,  justifyContent: 'center'}}>0</View>
         <View style={ { alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee',} }>+</View>
        <View style={ {  alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>-</View>
        </View>

        <View style={styles.button}>
        <View style={ {width: 150, fontSize: 40,  justifyContent: 'center'} }>Pase</View>
        <View style={ {width: 100, fontSize: 40,  justifyContent: 'center'}}>0</View>
         <View style={ { alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee',} }>+</View>
        <View style={ {  alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>-</View>
        </View>

         <View style={styles.button}>
        <View style={ {width: 150, fontSize: 40,  justifyContent: 'center'} }>Defensa</View>
        <View style={ {width: 100, fontSize: 40,  justifyContent: 'center'}}>0</View>
         <View style={ { alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee',} }>+</View>
        <View style={ {  alignItems: 'center',width: 40,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>-</View>
        </View>
         <View style={styles.button}>

        <View style={ {  alignItems: 'center',width: 300,fontSize: 40,  justifyContent: 'center', backgroundColor:'#eeee'}}>Agregar</View>
        </View>
</Card>
</View>
</View>




  
      //    </TouchableOpacity>

  
  
   

  );
}

const styles = StyleSheet.create({
  Botones: {
    //flex: 1,    //usar flex:1 para dividir equitativamente
    flexDirection: 'columns', //cambia a columnas usar row-reverse para invertir
    justifyContent: 'center', //space-between para separar
    alignItems:'flex-start', //centrar en x
     backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  
  },
  container: {
    flex: 1,    //usar flex:1 para dividir equitativamente
    flexDirection: 'row', //cambia a columnas usar row-reverse para invertir
  
    justifyContent: 'center', //space-between para separar
    alignItems:'flex-start', //centrar en x
    backgroundColor:'white',
   

    
   
  },

  button: {
    
   // padding: 2,
    // borderRadius: 5,
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 30,
    color: 'black',
    width:70, 
    height: 50,
    backgroundColor: "#E6E6E6",
     flex: 1
  }, 

});
