import React, {useState} from 'react';
import { Button, Text, View } from 'react-native';
import styled  from 'styled-components/native';

const Page = styled.SafeAreaView`
flex:1;
align-items:center;
`;

const HeaderText = styled.Text`
  font-size:25px;
`
//arrow function
export default()=> {
  return(
    <Page>
        <HeaderText>Calculadora de Gorjeta</HeaderText>
    </Page>
  );
}


