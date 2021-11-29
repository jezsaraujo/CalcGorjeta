import React, {useState} from 'react';
import { Button, Text, View } from 'react-native';
import styled  from 'styled-components/native';

const Page = styled.SafeAreaView`
flex:1;
align-items:center;
`;

const HeaderText = styled.Text`
  font-size:25px;
`;

const Input = styled.TextInput`
  width:90%;
  height:50px;
  font-size:18px;
  background-color: #eee;
  margin-top:20px;
  border-radius:10px;
  padding:10px;
`;

const CalcButton = styled.Button`
  margin-top:10px;
`;
//arrow function
export default()=> {
  const [bill, setBill] = useState(''); //iniciar com uma string vazia
  const [tip, setTip] = useState(0);

  const calc = ()=>{
    let nBill = parseFloat(bill); //convertendo string pra float

    if(nBill){ // se verdadeiro -> se =1 ou >0
      setTip((10/100) * nBill); //pega o valor de nBill e calc 10% e depois atualiza esse valor em setTip
    }else{
      alert("Digite o valor da conta")
    }
  }

  return(
    <Page>
        <HeaderText>Calculadora de Gorjeta</HeaderText>
        <Input 
        placeholder= "Quanto deu a conta?" 
        placeholderTextColor="#000"
        keyboardType="numeric" //teclado numerico
        value={bill}
        onChangeText={n=>setBill(n)}
        />
        <CalcButton title="Calcular" onPress={calc}/>
    </Page>
  );
}


