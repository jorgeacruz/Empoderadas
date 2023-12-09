import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #fff;
`;
export const ContainerView = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
`;
export const ContainerIcon = styled.View`
flex-direction: row;
width:200px;
padding: 10px;
justify-content: space-evenly;
`;
// FlatList Details
export const ContainerLista = styled.View`
    width: 350px;
    padding-top:20px;
    text-align: left;
`;

export const Title = styled.Text`
    color: #000;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
`;
export const Text = styled.Text`
    color: #000;
    font-size: 15px;
    padding: 2px;
    line-height: 22px;
`;
export const BTN = styled.TouchableOpacity`
    background: #000;
    padding: 5px;
    margin-right: 5px;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
`;
export const BTNEpaes = styled.TouchableOpacity`
    padding-right: 20px;
    display: flex;
    justify-content: center;
`;
export const Image = styled.Image`
  
`;
export const Logo = styled.Image`
    width: 200px;
    height: 200px;
`;
