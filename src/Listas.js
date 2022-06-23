import * as React from 'react';
import { List, ScrollView, Appbar, Paper, Title,Button } from 'react-native-paper';
import { SafeAreaView, Text, ImageBackground, StyleSheet, View, Image, TextInput,  } from "react-native";


  
  
const Listas =({setItemAtual, logout})=>{
  return (
    <View>
     
     <Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '30px', color: '#FFFFFF', fontFamily: 'VampiroOne-Regular', marginTop: '10px'}}>Pagina Inicial</Title>
      <List.Section >
        <List.Accordion
          title="Relações de IP"
          style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }}
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item  style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }}onPress={() => setItemAtual("predio-1")} title="Predio 1" />
          <List.Item  style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }}onPress={() => setItemAtual("predio-3")} title="Predio 3" />
          <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }} onPress= {() => setItemAtual ('predio-4')} title="Predio 4" />
          <List.Item  style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }} onPress={() => setItemAtual ('predio-5')} title="Predio 5" />
          <List.Item  style={{ backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }} onPress={() => setItemAtual ('predio-6')} title="Predio 6" />
          <List.Item style={{ backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }} onPress={() => setItemAtual ('predio-8')} title="Predio 8" />
        </List.Accordion>



                              

        
        
        <List.Accordion
          title="Planilhas"
           style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }}
          
          left={props => <List.Icon {...props} icon="folder" />}
          >
          <List.Item style={{ backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }} onPress={() => setItemAtual ('Reserva-de-Laboratorio')} title="Reserva de Laboratorio"/>
          <List.Item style={{ backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }} onPress={() => setItemAtual ('Eventos')} title="Eventos" />
          <List.Item style={{ backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }} onPress={() => setItemAtual ('Controle de Maquinas')} title="Controle De Maquinas" />
           <List.Item style={{ backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }} onPress={() => setItemAtual ('Impressoras')} title="Impressoras" />
          
        </List.Accordion>
                
                               


        <List.Accordion
          title="Itens Em Loco"
          style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }}
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item style={{ backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }} onPress={() => setItemAtual ('Itens Emprestados')} title="Itens Emprestados" />
          <List.Item style={{ backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }} onPress={() => setItemAtual ('Notebooks Mec')} title="Notebooks Mec" />
        </List.Accordion>



        <List.Accordion
          title="Informaçoes Uteis"
          style={{  backgroundColor: "#006ab1", borderRadius: 25,  }}
          titleStyle={{ color: 'white' }}
          left={props => <List.Icon {...props} icon="folder" />}
          >
          <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'whiteS' }} onPress={() => setItemAtual("AcessoAdmACAD")}  title="ACESSO ADM. ACADÊMICO" />
          <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }} onPress={() => setItemAtual("PPLPROF")}  title="PPLPROF" />
          <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }} onPress={() => setItemAtual("SenhasImpressoras")}  title="Senhas Impressoras" />
          <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }}onPress={() => setItemAtual("AtalhosDLL")}   title="Atalhos DLL" />
          <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }}onPress={() => setItemAtual("3cx")}   title="3cx" />
          <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }}onPress={() => setItemAtual("Servidores")}   title="Servidores" />
        </List.Accordion>

        <List.Accordion
          title="Tarefas Do CRC"
          style={{ backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }}
          left={props => <List.Icon {...props} icon="folder" />}
          >
          <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
                    titleStyle={{ color: 'white' }} onPress={() => setItemAtual("tarefasCRC")}  title="Tabela" />
        </List.Accordion>

                 
        <List.Accordion
          title="Tarefas Pessoais"
          style={{ backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }}
          left={props => <List.Icon {...props} icon="folder" />}
          >
          <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
                    titleStyle={{ color: 'white' }} onPress={() => setItemAtual("Dia Seguinte")}  title="Dia Seguinte" />
          <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
                    titleStyle={{ color: 'white' }} onPress={() => setItemAtual("Semana")}  title="Semana" />
          <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
                    titleStyle={{ color: 'red' }} onPress={() => setItemAtual("Importante")}  title="Importante" />
        </List.Accordion>

        <List.Accordion
          title="Mapeamentos de pastas"
          style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
          titleStyle={{ color: 'white' }}
          left={props => <List.Icon {...props} icon="folder" />}
          >
          <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
                    titleStyle={{ color: 'white' }} onPress={() => setItemAtual("Instalacão")}  title="Instalacão"/>
          <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
                    titleStyle={{ color: 'white' }} onPress={() => setItemAtual("Arquivos")}  title="Arquivos" />
                    <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
                    titleStyle={{ color: 'white' }} onPress={() => setItemAtual("Usuarios")}  title="Usuarios" />
                    <List.Item style={{  backgroundColor: "#006ab1", borderRadius: 20 }}
                    titleStyle={{ color: 'white' }} onPress={() => setItemAtual("Outros")}  title="Outros" />
        </List.Accordion>

      </List.Section>
       <Button icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828427.png' }} mode="contained" onPress={logout}>Logout</Button>
    </View>
  )
}



export { Listas }