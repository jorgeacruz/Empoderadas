import React, { useState } from 'react';
import { StatusBar, Text } from 'react-native';
import { Container, Title, Logomarca, InputCamp, CTA} from './styles';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './index';

import firebase from '../../services/firebaseConnect';


export default function LostPassword() {
// navigation
const navigation = useNavigation();
 //input values
const [email, setEmail] = useState();

 //actions
 

 return (
   <Container>
    <StatusBar barStyle='light-content'/>
        <Logomarca source={require('../../images/logo-Branca.png')} style={{}}/>
        <Title>Redefinir Senha</Title>

        <InputCamp 
            placeholder={'Digite seu Email'} 
            placeholderTextColor={'#fff'}
            value={email}
            onChangeText={setEmail}
        />

        
        <CTA>
            <Text style={{color:'#000'}}>Fazer Login</Text>
        </CTA>
        
        
   </Container>
  );
}
