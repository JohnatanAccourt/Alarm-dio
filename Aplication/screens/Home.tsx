import * as React from 'react';
import { Text, View } from '../components/Themed';
import styles from '../styles/Home/styles';
import { TouchableOpacity } from 'react-native';

import Header from '../props/Header';
import Title from '../props/Title';
import List from '../props/List';

export default function TabOneScreen({ navigation }:{ navigation: any }) {
  return (
    <View style={styles.container}>
        <View style={styles.wrapperHeader}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Header btnSize={40} btnName='md-menu'/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnWrapper}>
                <Text style={styles.textHeader}>Adicione um remédio</Text>
                <Header btnSize={40} btnName='md-add' />
            </TouchableOpacity>
        </View>

        <Title greetings="Bem Vindo," nameUser="Johnatan Accourt" message="Tomou o Omeprazol hoje?"/>

        <List icon="md-close-circle" time="14:00" remedy="Carvedilol" status="Não tomou hoje" amount={33}/>

    </View>
  );
}
