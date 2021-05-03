import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, // O ReactNative já utiliza por padrão FlexBox, o 1 indica ocupar a tela toda
    justifyContent: 'center', // Justificamos o conteúdo ao centro
    alignItems: 'center', // Alinhamos os elementos
    backgroundColor: '#F5FCFF', // Definimos a cor branca de fundo
  },
  welcome: {
    fontSize: 20, // Definimos tamanho de fontes 20px
    textAlign: 'center', // Alinhamento de texto ao centro
    margin: 10, // Definimos as margens com 10px
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.welcome}>FAETERJ BM</Text>
    </View>
  );
}


