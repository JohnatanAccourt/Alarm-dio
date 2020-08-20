import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/Home/styles';

import { Container_Title, Text_h2, Text_h1, Text_h3 } from '../styles/Home/style';

export default function Title(props){
    return (
        <Container_Title>
            <Text_h2 style={{fontFamily: 'OpenSans_400Regular' }}>{props.greetings}</Text_h2>
            <Text_h1 style={{fontFamily: 'OpenSans_600SemiBold' }}>{props.nameUser}</Text_h1>
            <Text_h3 style={{fontFamily: 'OpenSans_400Regular' }}>{props.message}</Text_h3>
        </Container_Title>  
    )
}