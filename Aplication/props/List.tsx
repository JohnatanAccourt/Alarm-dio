import { Text, View } from '../components/Themed';
import { ScrollView, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/Home/styles';
import React from 'react';

export default function List(props:{ icon: string, time: string, remedy: string, status: string, amount: number }){
    return (
          <ScrollView style={styles.wrapperList}>
              <View style={styles.item}>
                    <View style={styles.mailyItem}>
                        {props.icon == 'md-close-circle' ?
                            <Ionicons name={props.icon} size={40} style={styles.iconClose} /> 
                        :
                            <Ionicons name={props.icon} size={40} style={styles.iconCheck} />
                        }
                        <Text style={[styles.textHr, { fontFamily: 'OpenSans_700Bold' }]}>{props.time}</Text>
                        <Text style={[styles.textRemedyName, { fontFamily: 'OpenSans_400Regular' }]}>{props.remedy}</Text>

                    </View>
                    <View style={styles.checkingItem}>
                        {props.status == 'Não tomou hoje' ?
                            <View style={styles.verification}>
                                <Text style={[styles.textVerification, { fontFamily: 'OpenSans_400Regular' }]}>{props.status}</Text>
                            </View>
                        :
                            <View style={styles.verificationCheck}>
                                <Text style={[styles.textVerification, { fontFamily: 'OpenSans_400Regular' }]}>{props.status}</Text>
                            </View>
                        }
                        <Text style={[styles.textQtd, { fontFamily: 'OpenSans_400Regular' }]}>
                            Quantidade: <Text style={[styles.textQtd, { fontFamily: 'OpenSans_700Bold' }]}>{props.amount}</Text> 
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.configIcon}>
                        <Ionicons 
                            name='md-construct'
                            size={20}
                            style={{color: '#888'}}
                        />
                    </TouchableOpacity>
                </View>
          </ScrollView>
    )
}