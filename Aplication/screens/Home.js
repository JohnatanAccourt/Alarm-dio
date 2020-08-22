import * as React from 'react';
import { useState } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Title from '../props/Title';
import List from '../props/List';
import CustonModal from '../props/CustonModal';

import { 
    Container, 
    Wrapper_Header,
    BTN_ADD_Remedy,
    Text_Header,
    Styled_Menu_Icon,
    Styled_Add_Icon
} from '../styles/Home/style';

export default function Home({ navigation }) {
  const [modal, setVisibleModal] = useState(false);
  
  function handleModal(){
    setVisibleModal(!modal);

  } 

  return (
    <Container>
      <CustonModal setVisible={modal} onCloseModal={() => handleModal()} />
      <Wrapper_Header>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Styled_Menu_Icon />
          </TouchableOpacity>

          <BTN_ADD_Remedy onPress={() => handleModal()}>
              <Text_Header>Adicione um remédio</Text_Header>
              <Styled_Add_Icon />
          </BTN_ADD_Remedy>
      </Wrapper_Header>

      <Title greetings="Bem Vindo," nameUser="Johnatan Accourt" message="Tomou o Omeprazol hoje?"/>

      <List icon="md-close-circle" time="14:00" remedy="Carvedilol" status="Não tomou hoje" amount={33}/>
    </Container>
  );
}
