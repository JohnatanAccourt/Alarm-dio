import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import White from './constants/White';
import Dark from './constants/Dark';

import Home from './screens/Home.js';
import DrawerNav from './props/DrawerNav.js'
import Info from './screens/Info.js';
import Shop from './screens/Shop.js';

import {
    useFonts,
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';
import { AppLoading } from 'expo';

const Drawer = createDrawerNavigator();

export default function App() {
    const [dark, setDark] = useState(false);
    let [fontsLoaded] = useFonts({
        OpenSans_300Light,
        OpenSans_300Light_Italic,
        OpenSans_400Regular,
        OpenSans_400Regular_Italic,
        OpenSans_600SemiBold,
        OpenSans_600SemiBold_Italic,
        OpenSans_700Bold,
        OpenSans_700Bold_Italic,
        OpenSans_800ExtraBold,
        OpenSans_800ExtraBold_Italic,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }


    return (
        <ThemeProvider theme={dark ? Dark : White }>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Home"
                    drawerContent={props => <DrawerNav {...props}
                    onDarkModeChange={() => setDark(!dark)}
                    darkModeValue={dark} 
                     />
                }>
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Info" component={Info} />
                    {/* <Drawer.Screen name="Shop" component={Shop} /> */}
                </Drawer.Navigator>
            </NavigationContainer>
        </ThemeProvider>
      
    );
}

