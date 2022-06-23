import * as React from 'react';
import { View, Text } from 'react-native'
import { DataTable, Button } from 'react-native-paper';

const optionsPerPage = [7, 3, 4];

const TarefaCRC = ({ setItemAtual }) => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  const row = (responsavel, local, problema, data, cor) => (
    <DataTable.Row style={{ backgroundColor: cor }}>
      <View style={{ justifyContent: 'center' }}>
        <Text>{responsavel.join("\n")}</Text>
      </View>
      <View style={{ justifyContent: 'center', marginLeft: "4vh" }}>
        <Text>{local.join("\n")}</Text>
      </View>
      <View style={{ justifyContent: 'center', marginLeft: "4vh"  }}>
        <Text>{problema.join("\n")}</Text>
      </View>
        <View style={{ justifyContent: 'center', marginLeft: "2vh"  }}>
        <Text>{data.join("\n")}</Text>
      </View>
    </DataTable.Row>
  )

  return (
    <>
      <Button icon="home" mode="contained" onPress={() => setItemAtual("")}>
        Voltar
      </Button>
      <DataTable style={{ backgroundColor: 'white', justifyContent: 'end' }}>
        <DataTable.Header>
          <DataTable.Title>Resp.</DataTable.Title>
          <DataTable.Title>Local</DataTable.Title>
          <DataTable.Title>Problema</DataTable.Title>
          <DataTable.Title>Prazo</DataTable.Title>
        </DataTable.Header>

        {row(["Rafael"], ["Predio 1","Terreo"], ["Computador", "sem rede"], ["22/jun"], "green")}
        {row(["João"], ["Financeiro"," Prédio 8"], ["Impressora", "sem toner"], ["20/jun"], "yellow")}
        {row(["Maria"], ["Predio 4"], ["Sala sem", "domínio"], ["21/jun"], "red")}
        
        <DataTable.Pagination
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
        />
      </DataTable>
    </>
  );
}

export { TarefaCRC }