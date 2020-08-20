import * as React from 'react';
import { useState } from 'react';
// import { Switch } from 'react-native';
import { Switch } from 'react-native';
import { Container, Logo_Header, Logo_IMG, Text_APP_Title, Button, Text_BTN, Wrapper_Switch } from '../styles/Drawer/style';
import { Styled_Home_Icon, Styled_Cart_Icon, Styled_Share_Icon, Styled_Hand_Icon, Styled_Help_Icon} from '../styles/Drawer/style';
import { Styled_Moon_Icon, Styled_Sunny_Icon, BTN_Theme } from '../styles/Drawer/style';

export default function DrawerNav({ navigation, darkModeValue, onDarkModeChange }) {  
    return (
        <Container>
            <Wrapper_Switch>
                {darkModeValue == true ?
                    <Styled_Moon_Icon />
                :
                    <Styled_Sunny_Icon />
            }
                <Switch value={darkModeValue} onValueChange={onDarkModeChange}/>
            </Wrapper_Switch>
            <Logo_Header>
                <Logo_IMG
                  source={require('../assets/images/icon.png')}
                />
            </Logo_Header>
            <Text_APP_Title style={{ fontFamily: 'OpenSans_400Regular' }}> 
                Alarmédio App 
            </Text_APP_Title>

            <Button onPress={() => navigation.navigate('Home')}>
                <Styled_Home_Icon />
                <Text_BTN>
                    Início
                </Text_BTN>

            </Button>

            <Button>
                <Styled_Cart_Icon />
                <Text_BTN>
                    Compre Remédio
                </Text_BTN>
            </Button>

            <Button>
                <Styled_Share_Icon />
                <Text_BTN>
                    Recomende o Aplicativo
                </Text_BTN>
            </Button>

            <Button>
                <Styled_Hand_Icon />
                <Text_BTN>
                    Avisar ao responsável
                </Text_BTN>
            </Button>

            <Button>
                <Styled_Help_Icon />
                <Text_BTN>
                    Informações adicionais
                </Text_BTN>
            </Button>
        </Container>
    );
}
