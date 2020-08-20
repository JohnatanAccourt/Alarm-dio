import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
// import { Switch } from 'react-native-switch';

import { 
    Container, 
    Wrapper_Header,
    BTN_ADD_Remedy,
    Text_Header,
    Styled_Menu_Icon,
    Styled_Add_Icon
} from '../styles/Home/style';

// import Header from '../props/Header';
import Title from '../props/Title';
import List from '../props/List';

export default function Home({ navigation, darkModeValue, onDarkModeChange  }) {
  return (
    <Container>
      <Wrapper_Header>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Styled_Menu_Icon />
          </TouchableOpacity>

          <BTN_ADD_Remedy>
              <Text_Header>Adicione um remédio</Text_Header>
              <Styled_Add_Icon />
          </BTN_ADD_Remedy>
      </Wrapper_Header>

      <Title greetings="Bem Vindo," nameUser="Johnatan Accourt" message="Tomou o Omeprazol hoje?"/>

      <List icon="md-close-circle" time="14:00" remedy="Carvedilol" status="Não tomou hoje" amount={33}/>
    </Container>
  );
}
