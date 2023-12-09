import React, { useState, useEffect } from 'react';
import { FlatList, Linking, LogBox } from 'react-native';
import { Container, Title, ContainerLista, Text, BTN } from './styles';
import Feather from 'react-native-vector-icons/Feather'

export default function Polos() {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])

  //lista de polos de treinamentos
  const [polo, setPolo] = useState([
    {   
        id:"1",
        estado:"Rio de Janeiro",
        polo:"Complexo do Alemão",
        endereco:"Rua Nazaré Tedesco, 1200 - Morro do Alemão",
        resp:"Ana Paula da Silva",
        contato:"21987685024",
        email:"poloalemao@emporadas.com.br",
        map:"https://goo.gl/maps/xBFzekZYVuDfByFJ7"
    },
    {   
        id:"2",
        estado:"Rio de Janeiro",
        polo:"Mangueira",
        endereco:"Rua Nazaré Tedesco, 1200 - Morro do Alemão",
        resp:"Ana Paula da Silva",
        contato:"21987685024",
        email:"poloalemao@emporadas.com.br",
        map:"https://goo.gl/maps/xBFzekZYVuDfByFJ7"
    },
    {   
        id:"3",
        estado:"Rio de Janeiro",
        polo:"Rio das Ostras",
        endereco:"Rua Nazaré Tedesco, 1200 - Morro do Alemão",
        resp:"Ana Paula da Silva",
        contato:"21987685024",
        email:"poloalemao@emporadas.com.br",
        map:"https://goo.gl/maps/xBFzekZYVuDfByFJ7"
    },
    {   
        id:"4",
        estado:"Rio de Janeiro",
        polo:"Friburgo",
        endereco:"Rua Nazaré Tedesco, 1200 - Morro do Alemão",
        resp:"Ana Paula da Silva",
        contato:"21987685024",
        email:"poloalemao@emporadas.com.br",
        map:"https://goo.gl/maps/xBFzekZYVuDfByFJ7"
    },
    {   
        id:"5",
        estado:"Rio de Janeiro",
        polo:"Petrópolis",
        endereco:"Rua Nazaré Tedesco, 1200 - Morro do Alemão",
        resp:"Ana Paula da Silva",
        contato:"21987685024",
        email:"poloalemao@emporadas.com.br",
        map:"https://goo.gl/maps/xBFzekZYVuDfByFJ7"
    },
    {   
        id:"6",
        estado:"Rio de Janeiro",
        polo:"Campos dos Goytacazes",
        endereco:"Rua Nazaré Tedesco, 1200 - Morro do Alemão",
        resp:"Ana Paula da Silva",
        contato:"21987685024",
        email:"poloalemao@emporadas.com.br",
        map:"https://goo.gl/maps/xBFzekZYVuDfByFJ7"
    },
    {   
        id:"7",
        estado:"Rio de Janeiro",
        polo:"Favela da Maré",
        endereco:"Rua Nazaré Tedesco, 1200 - Morro do Alemão",
        resp:"Ana Paula da Silva",
        contato:"21987685024",
        email:"poloalemao@emporadas.com.br",
        map:"https://goo.gl/maps/xBFzekZYVuDfByFJ7"
    }
]);



 return (
   <Container>
        <Title style={{color:'#000'}}>Nossos Polos de Treinamento</Title>
        <FlatList
        data={polo}
        renderItem={({ item} ) => <ListaPolos data={item}/>}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        />

   </Container>
  );
}

function ListaPolos(props){
  return(
    <ContainerLista>
      <Title style={{ textAlign:'left', marginVertical:5}}>{props.data.polo}</Title>
      <Text>{props.data.endereco}</Text>
      <Text style={{padingBottom:0}}>Resp: {props.data.resp}</Text>
  
    <Container style={{flexDirection:'row', justifyContent:'flex-start', paddingTop:5}}>
      <BTN onPress={()=>{Linking.openURL('tel:8777111223');} }>
      <Feather name="phone" color={'#fff'} size={14} />
        <Text style={{color:'#fff'}} >{props.data.contato}</Text>
      </BTN>
      <BTN onPress={()=> {props.data.map}}>
      <Feather name="map" color={'#fff'} size={14} />
         <Text style={{color:'#fff'}}>Mapa</Text>
      </BTN>
    </Container>
    
    </ContainerLista>
  )
}

