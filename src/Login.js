import * as React from 'react';
import { List, ScrollView, Appbar, Paper, Title,Button } from 'react-native-paper';
import { SafeAreaView, Text, ImageBackground, StyleSheet, View, Image, TextInput,  } from "react-native";


const Login = ({ setMostraLogin, setMostraIps }) => {
  const [senha, setSenha] = React.useState(null);
  const [login, setLogin] = React.useState(null);

  const handleLogin = () => {
    if (senha === 'crcpuc' && login == 'crcpuc') {
      setMostraLogin(false);
      setMostraIps(true);
    }
  }
  
  return (
    <SafeAreaView style={{ marginRight: '20%', marginLeft: '20%' }}>
      <Title 
      style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '30px', color: '#FFFFFF', fontFamily: 'VampiroOne-Regular', marginVertical: '30px' }}
      > Entrar</Title>
      <Text id='userLabel'>Usuario</Text>
      <TextInput editable onChangeText={setLogin} value={login} style={{ borderBottomColor: '#000000', borderBottomWidth: 1 }} />
      <Text id='senhaLabel'
      style={{ }}
      >Senha</Text>
      <TextInput editable onChangeText={setSenha} secureTextEntry value={senha} style={{ borderBottomColor: '#000000', borderBottomWidth: 1 }}/>
      <Button 
      style={{ fontWeight: 'bold', fontFamily: 'VampiroOne-Regular'}}
      mode="contained" color="#C4C4C4" onPress={handleLogin}>Entrar</Button>
      <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '30px', color: '#FFFFFF', fontFamily: 'VampiroOne-Regular', marginTop: '50px'  }} mode="contained" color="#394455"
      > CRC Praca </Text>
    </SafeAreaView>
  )
}

export { Login }