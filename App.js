import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Noticia, Titulo } from './src/Titulo';
import { Codigos } from './src/codigos';

const name = "B A \n";
const qntd = 2;

export default function App() {
  return (
    <ScrollView style={styles.app}>
      
      <View>
        <Titulo/>
      </View>

      <View>
        <Noticia/>
        <Codigos nome={name} qntd={qntd}/>
      </View>
      

      <View>
        <Text style={styles.final}>Encerramento</Text>
      </View>
      
    </ScrollView>
    
  );
}



const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 35,
    //alignItems: 'center',
    //justifyContent: 'center',
  },


  final: {
    fontSize: 40,
    backgroundColor: '#100',
    color: '#fff',
    alignSelf: 'center',
    paddingRight: 56,
    paddingLeft: 56,
    paddingBottom: 35,
    position:'relative'
  },

  entrada:{
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
