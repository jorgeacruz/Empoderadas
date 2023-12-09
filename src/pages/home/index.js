import React, { useState } from 'react';
//import ToastManager, { Toast } from 'toastify-react-native'
import { Alert, StatusBar, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Title, Logomarca, InputCamp, CTA, BTNSingle} from './styles';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnect';
// pages
import LostPassword from './lostPass';
import CreateAccount from './createAccount';
import MyApp from '../app';


export default function HomeScreen() {

//navigation
const navigation = useNavigation();

 //input values
 const [email, setEmail] = useState();
 const [password, setPassword] = useState();

 //actions
 function GotoPass(){ navigation.navigate(LostPassword); }
 function GotoAccount(){ navigation.navigate(CreateAccount); }

 async function Logando(){
    if(email === '' || password === ''){
        Alert('Preencha os campos corretamente!')
        return;
    }
   await firebase.auth().signInWithEmailAndPassword(email,password)
   .then((value) => {
        navigation.navigate(MyApp);
   })
   .catch((error) => {
    Alert('Ops! Algo saiu errado!');
   })
 }
 

 return (
   <Container>
    <StatusBar barStyle='light-content'/>
        <Logomarca source={require('../../images/logo-Branca.png')} style={{}}/>
        <Title>Faça seu Login</Title>

        <InputCamp 
            placeholder={'Seu E-mail Cadastrado'} 
            placeholderTextColor={'#fff'}
            value={email}
            onChangeText={setEmail}
        />
        <InputCamp 
            placeholder={'Sua Senha Cadastrado'} 
            placeholderTextColor={'#fff'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
        />
        
        <CTA onPress={Logando}>
            <Text style={{color:'#000'}}>Fazer Login</Text>
        </CTA>
        
        <BTNSingle onPress={GotoPass}>
            <Text style={{color:'#fff', fontWeight:'bold'}}> Esqueci minha senha</Text>
        </BTNSingle>
        <BTNSingle onPress={GotoAccount}>
            <Text style={{color:'#F8C500', fontWeight:'bold'}}> Não tenho cadastro. Criar Conta.</Text>
        </BTNSingle>
   </Container>
  );
}
