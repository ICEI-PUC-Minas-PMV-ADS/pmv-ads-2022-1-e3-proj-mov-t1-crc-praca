import * as React from 'react';
import { List, ScrollView, Appbar, Paper, Title,Button,  } from 'react-native-paper';
import { SafeAreaView, Text, ImageBackground, StyleSheet, View, Image, TextInput } from "react-native";
import * as Linking from 'expo-linking';
import { Login } from './screens/Login'
import { Ip } from './screens/Ip'
import { TarefaCRC } from './screens/TarefasCRC'
import { Listas } from './screens/Listas'

import logo from './fundo.png'; 



const Itens = ({ logout }) => {
  const [itemAtual, setItemAtual] = React.useState("");

  if (itemAtual == "tarefasCRC") {
    return <TarefaCRC setItemAtual={setItemAtual} />
  }


else if (itemAtual === 'PPLPROF') {
    return (
        <>
        <Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'contained'
        style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
        <Title  style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}>Senha de Professor</Title>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Login:pplprof</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Senha:PPL****</Text>
        </View>
        </>
  
    )
 }

 else if (itemAtual === 'AcessoAdmACAD') {
    return (
        <>
        <Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'contained'
        style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
        <Title  style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}>ACESSO ADM. ACADÊMICO</Title>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Usuário: .\administrador</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Senha: Aed@******</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Senha: CRCpp******</Text>
        </View>
        </>
  
    )
 }

 else if (itemAtual === 'AtalhosDLL') {
    return (
        <>
        <Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'contained'
        style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
        <Title  style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}>ATALHOS ÚTEIS de Professor</Title>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Ncpa.cpl atalho de rede configuração IP</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Senha:Mstsc área remota </Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Senha:Diskmgmt.msc gerenciador de disco</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Appwiz.cpl Desinstalar programas</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Sysdm .clp Renomear computador
</Text>
        </View>
        </>
  
    )
 }

 else if (itemAtual === 'SenhasImpressoras') {
    return (
        <>
        <Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'contained'
        style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
        <Title  style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}> SENHA IMPRESSORAS</Title>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>SMCgti2018**** </Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>(senha administrador impressora)</Text>
        </View>
        </>
  
    )
 }

 else if (itemAtual === '3cx') {
    return (
        <>
        <Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'contained'
        style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
        <Title  style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}>PROGRAMA 3XC PHONE</Title>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Login:Account name: (colocar ramal)</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Caller ID: (colocar nome pessoal)</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Extension: (colocar ramal)</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>ID: (colocar ramal)</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Password: (voip@****)</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Senha:Local Ip: (10.15.1.170)</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Senha:Se Dizer on Hook Ok</Text>
        
        </View>
        </>
  
    )
 }

 else if (itemAtual === 'Servidores') {
    return (
        <>
        <Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'contained'
        style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
        <Title  style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}>Servidores de impressão</Title>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>\\picgtidc01 (servidor de imp. maioria dos prédios)</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>\\jp2gtidc01 (servidor de imp. Prédio 1)</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>\\plfgtidc01 (servidor de imp. Prédio</Text>
        </View>
        </>
  
    )
 }

  else if (itemAtual === 'Arquivos') {
    return (
        <>
        <Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'contained'
        style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
       
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>\\Aquiprod</Text>
        
        </View>
        </>
  
    )
 }

  else if (itemAtual === 'Usuarios') {
    return (
        <>
        <Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'contained'
        style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
        <Title  style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}>Dominio</Title>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>\\smc\netlogonf</Text>
       
        </View>
        </>
  
    )
 }

  else if (itemAtual === 'Outros') {
    return (
        <>
        <Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'contained'
        style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
        
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>\\gtikesprod01\KLSHARE\PkgInst (Kaspesky ADM)</Text>
        </View>
        </>
  
    )
 }


  
  else if (itemAtual === "predio-1") {
    return <Ip
      nome="Predio 1"
      ip="10.173.x.x"
      mask="255.255.0.0"
      gtw="10.173.10.250"
      dns="10.173.14.250"
      dns2="10.2.1.148"
      setItemAtual={setItemAtual}
    />
  } 
  

  else if (itemAtual === "predio-3") {
     return <Ip
      nome="Predio 3"
      ip="10.173.x.x"
      mask="255.255.0.0"
      gtw="10.173.10.250"
      dns="10.173.14.250"
      dns2="10.2.1.148"
      setItemAtual={setItemAtual}
    />
  }


  
 



    else if (itemAtual === "predio-4"){
     return <Ip
      nome="Predio 4"
      ip="10.173.x.x"
      mask="255.255.0.0"
      gtw="10.173.10.250"
      dns="10.173.14.250"
      dns2="10.2.1.148"
      setItemAtual={setItemAtual}
    />
  }

         else if (itemAtual === "predio-5"){
     return <Ip
      nome="Predio 5"
      ip="10.173.x.x"
      mask="255.255.0.0"
      gtw="10.173.10.250"
      dns="10.173.14.250"
      dns2="10.2.1.148"
      setItemAtual={setItemAtual}
    />
  }

        
              else if (itemAtual === "predio-6"){
     return <Ip
      nome="Predio 6"
      ip="10.173.x.x"
      mask="255.255.0.0"
      gtw="10.173.10.250"
      dns="10.173.14.250"
      dns2="10.2.1.148"
      setItemAtual={setItemAtual}
    />
  }
       
  else if (itemAtual === "predio-8"){
     return <Ip
      nome="Predio 8"
      ip="10.173.x.x"
      mask="255.255.0.0"
      gtw="10.173.10.250"
      dns="10.173.14.250"
      dns2="10.2.1.148"
      setItemAtual={setItemAtual}
    />
  }

  else if (itemAtual === "Reserva-de-Laboratorio"){
    return (
      <>
            <Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
            Voltar
          </Button>
          <View mode= 'Containd'
          style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
          >
          <Button icon={{uri: 'https://cdn-icons-png.flaticon.com/512/49/49918.png' }} ode= 'Containd'
          style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}} onPress={ Reserva1 }>Planilhas de Reserva</Button>
          <Text></Text>
          </View>
        </>

    ) 

  }

  else if (itemAtual === "Controle de Maquinas"){
  return (
    <>
<Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'Containd'
         style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
        <Button icon={{uri: 'https://cdn-icons-png.flaticon.com/512/49/49918.png' }} ode= 'Containd'
         style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}} onPress={ Controle1 }>Tabela De Controle
        </Button>
        <Text></Text>
        </View>
       </>

  )

  }

  else if (itemAtual === "Impressoras"){
  return (
    <>
<Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'Containd'
         style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
        <Button icon={{uri: 'https://cdn-icons-png.flaticon.com/512/49/49918.png' }} ode= 'Containd'
         style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}} onPress={ Impressoras }>Impressoras
        </Button>
        <Text></Text>
        </View>
       </>

  )

  }

   else if (itemAtual === "Eventos"){
  return (
    <>
<Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'Containd'
         style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
        <Button icon={{uri: 'https://cdn-icons-png.flaticon.com/512/49/49918.png' }} ode= 'Containd'
         style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}} onPress={ Eventos }>Reserva de Eventos
        </Button>
        <Text></Text>
        </View>
       </>

  )

  }

else if (itemAtual === "Instalacão") {
    return (
      <>
        <Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'contained'
        style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
        <Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}>Servidor de Instalacao</Title>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>\\bh1dpdsrv05\instalacao$</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>\\p1fgtidc01\instalaplf$</Text>
     
         </View>  
      </>
    )
  }
  

  return <Listas logout={logout} setItemAtual={setItemAtual} />

}
                               

const Main = () => {
  const [mostraItens, setMostraItens] = React.useState(false);
  const [mostraLogin, setMostraLogin] = React.useState(true);
  
  const logout = () => {
    setMostraLogin(true);
    setMostraItens(false);
  }

  return (
    <ImageBackground source={logo} resizeMode="cover" style={styles.image}>
      {mostraLogin && <Login setMostraLogin={setMostraLogin} setMostraIps={setMostraItens}  />}
      {mostraItens && <Itens logout={logout} />} 
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

//Linkings//
function Eventos (){Linking.openURL('https://www.aprenderexcel.com.br//imagens/post/155/1257-1.jpg') }
function Controle1 (){Linking.openURL('https://www.aprenderexcel.com.br//imagens/post/155/1257-1.jpg') }
function Reserva1 (){Linking.openURL('https://www.hashtagtreinamentos.com/wp-content/uploads/2021/03/image-2-1024x639.png') }
function Impressoras (){Linking.openURL('https://docs.google.com/spreadsheets/d/1e66XjQ-439BDhpm_4sKJROD_-uWGOOBbjKJcSbRjH1Q/edit?usp=sharing') }


export default Main;