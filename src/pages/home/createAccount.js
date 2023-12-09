import React, { useState } from 'react';
import { StatusBar, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Title, Logomarca, InputCamp, CTA} from './styles';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnect';

export default function CreateAccount() {

//navigation
const navigation = useNavigation();

 //input values
const [nome, setNome] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();

 //actions
 async function cadastrar(){
   
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((value) => {
        setEmail('');
        setNome('');
        setPassword('');
        navigation.navigate(HomeScreen);
       // alert('Usuario Criado com sucesso!');
    })
    .catch((error) => {
        if(error.code === 'auth/weak-password'){
            alert('Senha deve conter mais de 6 caracters');
            return;
        }
        if(error.code === 'auth/invalid-email'){
            alert('Email Invalido')
        } else {
            alert('Algo saiu errado');
        }
    })
 }
 


 return (
   <Container>
    <StatusBar barStyle='light-content'/>
        <Logomarca source={require('../../images/logo-Branca.png')} style={{}}/>
        <Title style={{marginBottom:5}}>Cria sua</Title>
        <Title style={{marginBottom:70}}>Conta Empoderada</Title>

        <InputCamp 
            placeholder={'Digite seu Nome'} 
            placeholderTextColor={'#fff'}
            value={nome}
            onChangeText={setNome}
        />
        <InputCamp 
            placeholder={'Digite seu Email'} 
            placeholderTextColor={'#fff'}
            value={email}
            onChangeText={setEmail}
        />
        <InputCamp 
            placeholder={'Crie sua Senha'} 
            placeholderTextColor={'#fff'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
        />
        
        <CTA onPress={cadastrar}>
            <Text style={{color:'#000', fontWeight:'bold'}}>Cria Conta Empoderada</Text>
        </CTA>
        <CTA style={{flexDirection:'row', backgroundColor:'#fff'}}>
        <Icon name="google" size={20} color="#000" style={{marginHorizontal:10}}/>
            <Text style={{fontWeight:'bold'}}>Login conta Google</Text>
        </CTA>
        
   </Container>
  );
}
