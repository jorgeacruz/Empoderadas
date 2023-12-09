import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function AlertPage() {
 return (
   <View style={styles.container}>
    <Text>aqui entra todas as alteraçoes</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  }
})