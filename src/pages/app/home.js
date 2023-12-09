import React from 'react';
import { Text, StatusBar } from 'react-native';
import { Container } from './styles';

export default function App() {
 return (
   <Container>
    <StatusBar barStyle='dark-content'/>
    <Text>Home App</Text>
   </Container>
  );
}