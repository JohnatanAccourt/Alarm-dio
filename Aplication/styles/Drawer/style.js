import * as React from 'react'; 
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

// icons =============================================

export const IconHome = ({style}) => (
    <Ionicons
        style={style}
        name='md-home'
        size={28}
    />
)

export const Styled_Home_Icon = styled(IconHome)`
    color: ${props => props.theme.colors.gray_bold};
`;

export const IconCart = ({style}) => (
    <Ionicons
        style={style}
        name='md-cart'
        size={28}
    />
)

export const Styled_Cart_Icon = styled(IconCart)`
    color: ${props => props.theme.colors.gray_bold};
`; 

export const IconShare = ({style}) => (
    <Ionicons
        style={style}
        name='md-share'
        size={28}
    />
)

export const Styled_Share_Icon = styled(IconShare)`
    color: #62B559;
`;

export const IconHand = ({style}) => (
    <Ionicons
        style={style}
        name='md-hand'
        size={28}
    />
)

export const Styled_Hand_Icon = styled(IconHand)`
    color: ${props => props.theme.colors.gray_bold};
`;

export const IconHelp = ({style}) => (
    <Ionicons
        style={style}
        name='md-help-circle'
        size={28}
    />
)

export const Styled_Help_Icon = styled(IconHelp)`
    color: ${props => props.theme.colors.gray_bold};
`;

export const IconMoon = ({style}) => (
    <Ionicons
        style={style}
        name='md-moon'
        size={20}
    />
)

export const Styled_Moon_Icon = styled(IconMoon)`
    color: ${props => props.theme.colors.gray_bold};
    margin-left: 3px; 
`;

export const IconSunny = ({style}) => (
    <Ionicons
        style={style}
        name='md-sunny'
        size={20}
    />
)

export const Styled_Sunny_Icon = styled(IconSunny)`
    color: ${props => props.theme.colors.gray_bold};
    margin-right: 3px; 
`;

// export const BTN_Theme = styled.TouchableOpacity`
//     position: absolute;
//     top: -5px;
//     left: 5px;
//     padding: 5px;
// `

// icons =============================================

export const Container = styled.View `
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`;

export const Logo_Header = styled.View `
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 5px;
`;

export const Logo_IMG = styled.Image `
    width: 160px;
    height: 160px;
`;

export const Text_APP_Title = styled.Text `
    text-align: center;
    font-size: 26px;
    color: ${props => props.theme.colors.gray_bold};
    margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity `
    width: 90%;
    height: 50px;
    align-self: center;
    flex-direction: row;
    align-items: center;
`;

export const Text_BTN = styled.Text `
    font-size: 15px;
    color: ${props => props.theme.colors.gray_semibold};
    margin-left: 10px;
`;

export const Wrapper_Switch = styled.View `
    position: absolute;
    top: 10px;
    left: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
