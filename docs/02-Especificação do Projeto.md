# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

![Ronaldo](https://user-images.githubusercontent.com/83379675/161451262-dea9d120-ca14-46bb-86a5-140d23c86bd8.png)

![Igor](https://user-images.githubusercontent.com/83466411/161452300-631d3941-5fb4-490a-8f97-be3ff99e14f7.png)

![Ricardo](https://user-images.githubusercontent.com/83466411/161451688-60848933-23f4-4631-b967-23b2d97194a8.png)

![José](https://user-images.githubusercontent.com/83466411/161452241-c695357a-e618-4977-96c8-fc63338cbccf.png)

![Ana Paula](https://user-images.githubusercontent.com/83466411/161452663-1bde392e-5819-47f2-ac9c-a8af8989fadd.png)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

## Modelagem de processos de Negócio

### Análise da situação atual

Hoje em dia o trabalho dos técnicos da praça da pucminas é bem dificultado pela falta de um lugar onde todas as informações estão registradas, fazendo assim um processo longo para pegar simples informações, queremos mudar isso com nosso app.

### Descrição geral da proposta

Vamos unir todas as informações relevantes aos técnicos em um só lugar, onde assim o técnico consegue agilizar seu trabalho ao poupar um tempo enorme buscando dados em planilhas ou gruposde whatsapp.

### Processo atual
![Modelo](https://user-images.githubusercontent.com/82723489/161446023-51dfbdf2-bbb2-41d8-a701-b37ffaca7f5c.png)


### Processo Proposto
![Modelo (1)](https://user-images.githubusercontent.com/82723489/161446131-1edcc6d7-60f6-4580-99ef-5a727e8fcb40.png)

### Indicadores de desempenho
| #   | Indicador  | Objetivo | Descrição | Calculo | Fonte | Perspectiva |
|-----|------------|----------|-----------|---------|-------|-------------|
| 1 | Feedback de usuários| Acompanhar a opinião dos usuários| Descobrir se o app cumpre sua proposta| Feedback positivos/negativos|Reclamaçoes dos técnicos| Crescimento e aprendizado|
| 2 | Usabilidade | Acompanhar se o app realmente está sendo usado | Descobrir se o app está sendo mesmo usado, deixando de lado o método antigo| Número de usuários/número de técnicos | Tabela de usuários | Crescimento e aprendizado | 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Permitir acesso a planilhas da praça em tempo real em qualquer lugar.    | ALTA |
|RF-003| Permitir contatos apenas presentes em um endpoint na palma da mão.    | ALTA |
|RF-004| Necessidade de ter relações de IP e planilhas de IP em tempo real para evitar | ALTA |
|RF-005|	Meios de controle de equipamentos para evitar situações de esquecimento ou perca. | MEDIA |
|RF-006| Notas de lembretes compartilhados com a equipe para futuros atendimentos.| ALTA |
|RF-007| Lembretes de atividades realizadas, para registro de atividade interna. | ALTA |
|RF-008|	Caminhos para mapeamentos de impressoras e configurações semelhantes | ALTA |
|RF-009| Registro de usuários e senhas dos técnicos | ALTA |




### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| A Aplicação deve conter um sistemas de logins e senha | ALTA |
|RNF-004|	Necessidade de ter caminho de mapeamento de rede para funcionários terceiros. | ALTA |
|RNF-005| Necessidade de ter tutoriais de instalação para a utilização de técnico . | ALTA |
|RNF-006|	Necessidade de ter tutorias para mandar para alunos via whatsapp. | ALTA |
|RNF-004|	Necessidade de ter caminho de mapeamento de rede para funcionários terceiros. | ALTA |
|RNF-005| Necessidade de ter tutoriais de instalação para a utilização de técnico . | ALTA |
|RNF-006|	Necessidade de ter tutorias para mandar para alunos via whatsapp. | ALTA |
|RNF-007| Lembretes de atividades realizadas, para registro de atividade interna. | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

### Diagrama de Casos de Uso

![Casos de uso](https://user-images.githubusercontent.com/82723489/161447316-ee90f0a1-0ff4-42ad-b3c3-91fa87470545.png)


### Matriz de Rastreabilidade
![Captura de tela 2022-04-03 174135](https://user-images.githubusercontent.com/82723489/161447712-c2791940-98c8-462f-a9f0-d6cebbf944a1.png)


### Gerenciamento de Projeto 

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.


## Gerenciamento de Tempo

![Captura de tela 2022-04-03 203726](https://user-images.githubusercontent.com/82723489/161453902-1327fea9-6aa4-4a34-8601-82e1a0875d2b.png)


![diagrama](https://user-images.githubusercontent.com/83466411/161455896-d55cb87f-dc8d-4f32-8d1f-d52417119f61.png)


## Gerenciamento de equipe 


### Gestão de orçamento

![Gestão Orçamento](https://user-images.githubusercontent.com/83379675/161454876-835cf4f9-4976-48ea-8a5d-02b20d45a72a.png)

