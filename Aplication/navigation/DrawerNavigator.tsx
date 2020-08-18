import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Constants from 'expo-constants';
import DrawerNav from '../props/DrawerNav';

import Home from '../screens/Home';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabOneScreen from '../screens/TabOneScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
  return(
    <Drawer.Navigator 
      initialRouteName="TabOneScreen"
      drawerContent={props => <DrawerNav />}
      // drawerStyle={{
      //   // backgroundColor: "#000",
      //   // marginTop: Constants.statusBarHeight,
      // }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={TabTwoScreen} />
    </Drawer.Navigator>
)}


