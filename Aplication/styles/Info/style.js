import * as React from 'react';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

// icons =============================================

export const IconMenu = ({style}) => (
    <Ionicons
        style={style}
        name='md-menu'
        size={40}
    />
)
 
export const Styled_Menu_Icon = styled(IconMenu)`
    color: ${props => props.theme.colors.gray_light};
`;

export const IconStar = ({style}) => (
    <Ionicons
        style={style}
        name='md-star'
        size={120}
    />
)
export const Styled_Star_Icon = styled(IconStar)`
    color: #D8D8D8;
`;

export const IconChat = ({style}) => (
    <Ionicons
        style={style}
        name='md-chatbubbles'
        size={120}
    />
)
export const Styled_Chat_Icon = styled(IconChat)`
    color: #D8D8D8;
`;

// icons =============================================

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`;
export const ContainerScroll = styled.ScrollView`
    background-color: ${props => props.theme.colors.background};
`;

export const Wrapper_Header = styled.View `
    height: 60px;
    width: 95%;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const ImageLogo = styled.Image`
    margin-bottom: 20px;
    width: 170px;
    height: 170px;
    align-self: center;
`;

export const H3 = styled.Text`
    width: 95%;
    font-size: 17px;
    text-align: center;
    align-self: center;
    margin-bottom: 30px;
    color: ${props => props.theme.colors.text_color}
`;

export const H4 = styled.Text`
    width: 95%;
    font-size: 17px;
    text-align: center;
    align-self: center;
    margin-bottom: 40px;
    color: ${props => props.theme.colors.text_color}
`;

export const Card = styled.View `
    /* background-color: ${props => props.theme.colors.gray_bold}; */
    height: 200px;
    width: 90%;
    align-self: center;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
`;

export const TextCard = styled.Text`
    font-size: 17px;
    text-align: center;
    /* align-self: center; */
    color: ${props => props.theme.colors.text_color};
    margin-bottom: 5px;
`;

export const Link = styled.Text`
    font-size: 17px;
    text-align: center;
    color: #51CAFF;
`;

