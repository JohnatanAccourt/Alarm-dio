import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/Home/styles';
import React from 'react';
import { Scroll_List, Remedy_Item, Maily_Item, Text_HR, Text_Remedy_name, Config_Icon, Verification, VerificationCheck, Text_Verification, Text_Qtd, Checking_Item } from '../styles/Home/style';

export default function List(props){
    return (
        <Remedy_Item>
            <Maily_Item>
                {props.icon == 'md-close-circle' ?
                    <Ionicons name={props.icon} size={40} style={styles.iconClose} /> 
                :
                    <Ionicons name={props.icon} size={40} style={styles.iconCheck} />
                }
                <Text_HR style={{ fontFamily: 'OpenSans_700Bold' }}>{props.time}</Text_HR>
                <Text_Remedy_name style={{ fontFamily: 'OpenSans_400Regular' }}>{props.remedy}</Text_Remedy_name>

            </Maily_Item>
            <Checking_Item>
                {props.status == 'Não tomou hoje' ?
                    <Verification>
                        <Text_Verification style={{ fontFamily: 'OpenSans_400Regular' }}>{props.status}</Text_Verification>
                    </Verification>
                :
                    <VerificationCheck>
                        <Text_Verification style={{ fontFamily: 'OpenSans_400Regular' }}>{props.status}</Text_Verification>
                    </VerificationCheck>
                }
                <Text_Qtd style={{ fontFamily: 'OpenSans_400Regular' }}>
                    Quantidade: <Text_Qtd style={{ fontFamily: 'OpenSans_700Bold' }}>{props.amount}</Text_Qtd> 
                </Text_Qtd>
            </Checking_Item>

            <Config_Icon>
                <Ionicons 
                    name='md-construct'
                    size={20}
                    style={{color: '#888'}}
                />
            </Config_Icon>
        </Remedy_Item>
    )
}