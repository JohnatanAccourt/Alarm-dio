import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from '../styles/Drawer/styles';
import { Ionicons } from '@expo/vector-icons'

export default function DrawerNav() { 

    return (
        <View style={styles.container}>
            <View style={styles.logoHeader}>
                <Image
                  style={styles.logoIMG}
                  source={require('../assets/images/icon.png')}
                />
            </View>
            <Text style={[styles.TextAPPTitle, { fontFamily: 'OpenSans_400Regular' }]}> 
                Alarmédio App 
            </Text>

            <TouchableOpacity style={styles.btn}>
                <Ionicons 
                    style={styles.iconBtn}
                    size={28}
                    name="md-home"
                />
                <Text style={styles.textBtn}>
                    Início
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Ionicons 
                    style={styles.iconBtn}
                    size={28}
                    name="md-cart"
                />
                <Text style={styles.textBtn}>
                    Compre Remédio
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Ionicons 
                    style={[styles.iconBtn, {color: '#62B559'}]}
                    size={28}
                    name="md-share"
                />
                <Text style={styles.textBtn}>
                    Recomende o Aplicativo
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Ionicons 
                    style={styles.iconBtn}
                    size={28}
                    name="md-hand"
                />
                <Text style={styles.textBtn}>
                    Avisar ao responsável
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Ionicons 
                    style={styles.iconBtn}
                    size={28}
                    name="md-help-circle"
                />
                <Text style={styles.textBtn}>
                    Informações adicionais
                </Text>

            </TouchableOpacity>
        </View>
    );
}
