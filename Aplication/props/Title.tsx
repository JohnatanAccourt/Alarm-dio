import * as React from 'react';
import { Text, View} from '../components/Themed';
import styles from '../styles/Home/styles';

export default function Title(props: {greetings: string, nameUser: string, message: string}){
    return (
        <View style={styles.containerTitle}>
            <Text style={[styles.texth2, { fontFamily: 'OpenSans_400Regular' }]}>{props.greetings}</Text>
            <Text style={[styles.texth1, { fontFamily: 'OpenSans_600SemiBold' }]}>{props.nameUser}</Text>
            <Text style={[styles.texth3, { fontFamily: 'OpenSans_400Regular' }]}>{props.message}</Text>
        </View>  
    )
}