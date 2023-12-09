import React from 'react';
import { ScrollView } from 'react-native';
import { Container, ContainerView, Text, Image, Title } from './styles';

export default function Contact() {
 return (
   <Container>
    <ScrollView>
      <Title>Eu sou EMPODERADA!</Title>
      <ContainerView>
        <Image source={require('../../images/profile.png')} />
        <Title>Ana Paula Gonçalves</Title>
        <Text>Professora</Text>
      </ContainerView>

      <ContainerView>
        <Title>Minha Historia</Title>
        <Text>
          Loren ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin sed pulvinar enim. Vestibulum dictum ac orci sed finibus. 
          Suspendisse potenti. Etiam ultrices arcu vitae nisl suscipit dignissim. 
          Duis non est libero. Nam commodo magna nec pretium porta. 
          Donec ut tortor dapibus, sollicitudin orci a, placerat metus. 
          Etiam interdum semper metus
        </Text>
      </ContainerView>

      <ContainerView>
        <Title>Minhas Maiores Vitórias</Title>
        <Text>
          Loren ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin sed pulvinar enim. Vestibulum dictum ac orci sed finibus. 
          Suspendisse potenti. Etiam ultrices arcu vitae nisl suscipit dignissim. 
          Duis non est libero. Nam commodo magna nec pretium porta. 
          Donec ut tortor dapibus, sollicitudin orci a, placerat metus. 
          Etiam interdum semper metus
        </Text>
      </ContainerView>

      <ContainerView>
        <Title>Palestras e Cursos que participei</Title>
        <Text>
          Loren ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin sed pulvinar enim. Vestibulum dictum ac orci sed finibus. 
          Suspendisse potenti. Etiam ultrices arcu vitae nisl suscipit dignissim. 
          Duis non est libero. Nam commodo magna nec pretium porta. 
          Donec ut tortor dapibus, sollicitudin orci a, placerat metus. 
          Etiam interdum semper metus
        </Text>
      </ContainerView>

      <ContainerView>
        <Title>Meu Polo de Treinamento</Title>
        <Title>Mangueira</Title>
        <Text>Resp: Amália Teixeira</Text>
      </ContainerView>
      

    </ScrollView>
   </Container>
  );
}