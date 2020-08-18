import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/Home/styles';

export default function Header(props: { btnSize: number | undefined,  btnName: string}){
    return (
        <Ionicons 
            name={props.btnName}
            size={props.btnSize}
            style={styles.icon}
        />     
    )
}