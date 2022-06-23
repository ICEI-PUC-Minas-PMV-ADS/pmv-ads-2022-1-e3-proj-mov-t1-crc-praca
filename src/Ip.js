import * as React from 'react';
import { List, ScrollView, Appbar, Paper, Title,Button } from 'react-native-paper';
import { SafeAreaView, Text, ImageBackground, StyleSheet, View, Image, TextInput,  } from "react-native";


const Ip = ({ nome, ip, mask, gtw, dns, dns2, setItemAtual }) => (  
      <>
        <Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
          Voltar
        </Button>
        <View mode= 'Containd'
         style={{backgroundColor: '#C4C4C4', borderRadius: 20, fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}
        >
          <Title  style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}>Predio: {nome}</Title>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>IP: {ip}</Text>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>Mask: {mask}</Text>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>GTW: {gtw}</Text>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>DNS: {dns}</Text>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px'}}>DNS²: {dns2}</Text>    
        
        </View>
    </>
)

export { Ip }