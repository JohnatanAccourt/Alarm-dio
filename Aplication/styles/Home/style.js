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
export const IconAdd = ({style}) => (
    <Ionicons
        style={style}
        name='md-add'
        size={40}
    />
)
export const Styled_Add_Icon = styled(IconAdd)`
    color: ${props => props.theme.colors.gray_light};
`;

// icons =============================================


export const Container = styled.View`
    flex: 1;
    padding-top: ${Constants.statusBarHeight}px;
    background-color: ${props => props.theme.colors.background};
`;

export const Wrapper_Header = styled.View `
    background-color: ${props => props.theme.colors.background};
    height: 60px;
    width: 95%;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BTN_ADD_Remedy = styled.TouchableOpacity `
    flex-direction: row;
    align-items: center;
`;

export const Text_Header = styled.Text `
    color: ${props => props.theme.colors.gray_semibold};
    padding-right: 2%;
    font-size: 15px;
`;

// Title prop =============================================

export const Container_Title = styled.View `
    background-color: ${props => props.theme.colors.background};
    width: 85%;
    margin-top: 7px;
    margin-bottom: 7px;
    align-self: center;
`;

export const Text_h2 = styled.Text `
    font-size: 27px;
    color: ${props => props.theme.colors.gray_bold};
`;

export const Text_h1 = styled(Text_h2) `
    font-size: 33px;
    margin-top: 6px;
    margin-bottom: 6px;
`;

export const Text_h3 = styled(Text_h2) `
    font-size: 23px;
`;

// Title prop ============================================

// List prop =============================================

export const Scroll_List = styled.ScrollView `
    width: 85%;
    height: 10px;
    align-self: center;
    margin-top: 10px;
`;

export const Remedy_Item = styled.View `
    width: 100%;
    height: 85px;
    background: ${props => props.theme.colors.gray_evenlight};
    border-radius: 15px;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const Maily_Item = styled.View `
    width: 100%;
    height: 65%;
    background: ${props => props.theme.colors.gray_evenlight};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    flex-direction: row;
    align-items: center;
`;

export const Text_HR = styled.Text `
    font-size: 24px;
    margin-left: 3px;
    margin-right: 3px;
    color: ${props => props.theme.colors.text_color}
`;

export const Text_Remedy_name = styled.Text `
    font-size: 20px;
    width: 49%;
    color: ${props => props.theme.colors.text_color}
`;

export const Checking_Item = styled.View `
    background: ${props => props.theme.colors.gray_evenlight};
    height: 35%;
    width: 100%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Verification = styled.View `
    height: 100%;
    width: 50%;
    background-color: #ff0000;
    border-bottom-left-radius: 15px;
    align-items: center;
    justify-content: center;
`;

export const VerificationCheck = styled(Verification)`
    background-color: #62B559;
`

export const Text_Verification = styled.Text `
    color: #fff;
    font-size: 15px;
`;

export const Text_Qtd = styled.Text `
    padding-right: 15px;
    font-size: 15px;
    color: ${props => props.theme.colors.text_color}
`;

export const Config_Icon = styled.TouchableOpacity `
    position: absolute;
    top: 0;
    right: 0;
    padding: 7px;
`;

// List prop =============================================