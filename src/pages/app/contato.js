import React from 'react';
import { Image, ScrollView, Linking, View } from 'react-native';
import { Container, ContainerView, ContainerIcon, Title, Text, Logo, BTNEpaes } from './styles';
import Feather from 'react-native-vector-icons/Feather';

export default function Contact() {
  function faceLink() { Linking.openURL('https://facebook.com'); }
  function instaLink() { Linking.openURL('https://instagram.com/empoderadas.rj'); }
  function twitterLink() { Linking.openURL('https://twitter.com'); }
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>

        <ContainerView>
          <Logo source={require('../../images/logo.png')} />
          <Title>Lugar de Mulher, é onde Ela quiser!</Title>
        </ContainerView>

        <ContainerView>
          <Title>Nossa Missão</Title>
          <Text>
            Loren ipsum dolor sit amet, consectetur adipiscing elit.
            Proin sed pulvinar enim. Vestibulum dictum ac orci sed finibus.
            Suspendisse potenti. Etiam ultrices arcu vitae nisl suscipit dignissim.
            Duis non est libero.
          </Text>
        </ContainerView>


        <ContainerView>
        <Text style={{fontWeight:'bold', marginBottom:15}}>Nossas Redes Sociais</Text>
          <ContainerIcon>
            <Feather name='facebook' color={'#000'} size={30} onPress={faceLink} />
            <Feather name='instagram' color={'#000'} size={30} onPress={instaLink} />
            <Feather name='twitter' color={'#000'} size={30} onPress={twitterLink} />
          </ContainerIcon>
        </ContainerView>
        
        <ContainerView>
          <Text style={{fontWeight:'bold', marginBottom:15}}>Idealizadores / Responsáveis</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <BTNEpaes>
              <Image source={require('../../images/EricaPaes.png')} />
              <Text>Erica Paes</Text>
            </BTNEpaes>
            <BTNEpaes>
              <Image source={require('../../images/EricaPaes.png')} />
              <Text>Erica Paes</Text>
            </BTNEpaes>
            <BTNEpaes>
              <Image source={require('../../images/EricaPaes.png')} />
              <Text>Erica Paes</Text>
            </BTNEpaes>
          </View>
        </ContainerView>

      </ScrollView>
    </Container >
  );
}