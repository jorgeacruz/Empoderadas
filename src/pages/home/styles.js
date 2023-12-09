import styled from 'styled-components/native';

// basics styles
export const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: flex-start;
`;
export const Title = styled.Text`
  color: #F8C500;
  font-size: 33px;
  font-weight: 700;
  margin-bottom: 100px;
`;
//logo | Images
export const Logomarca = styled.Image`
    height: 170px;
    width: 170px;
    margin-bottom: 40px;
    margin-top: 10px;
`;

// inputs
export const InputCamp = styled.TextInput`
    border-bottom-width:1px;
    border-bottom-color: #fff;
    text-align: center;
    width: 340px;
    height: 40px;
    color: #fff;
    margin-bottom:10px;
    text-transform: lowercase;

`;
//buttons
export const CTA = styled.TouchableOpacity`
    background:#F8C500;
    border-radius: 3px;
    margin: 5px;
    justify-content: center;
    align-items: center;
    width: 340px;
    height: 34px;
`;
export const BTNSingle = styled.TouchableOpacity`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 100px;
`;



