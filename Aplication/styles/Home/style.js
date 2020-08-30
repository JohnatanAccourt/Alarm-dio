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

export const IconPencil = ({style}) => (
    <Ionicons
        style={style}
        name='md-pricetag'
        size={30}
    />
)
export const Styled_Pencil_Icon = styled(IconPencil)`
    color: ${props => props.theme.colors.gray_light};
    position: absolute;
    left: 0;
    bottom: 10px;
`;

export const IconClose = ({style}) => (
    <Ionicons
        style={style}
        name='md-close'
        size={40}
    />
)
export const Styled_Close_Icon = styled(IconClose)`
    color: #FF0000;
`;

export const IconAlarm = ({style}) => (
    <Ionicons
        style={style}
        name='md-alarm'
        size={30}
    />
)
export const Styled_Alarm_Icon = styled(IconAlarm)`
    color: ${props => props.theme.colors.gray_light};
    position: absolute;
    left: 0;
    bottom: 10px;
`;


export const IconAmount = ({style}) => (
    <Ionicons
        style={style}
        name='md-albums'
        size={30}
    />
)
export const Styled_Amount_Icon = styled(IconAmount)`
    color: ${props => props.theme.colors.gray_light};
    position: absolute;
    left: 0;
    bottom: 10px;
`;

export const IconBigClose = ({style}) => (
    <Ionicons
        style={style}
        name='md-close-circle'
        size={55}
    />
)
export const Styled_Big_Close_Icon = styled(IconBigClose)`
    color: #FF0000;

`;

export const IconBigCheck = ({style}) => (
    <Ionicons
        style={style}
        name='md-checkmark-circle'
        size={55}
    />
)
export const Styled_Big_Check_Icon = styled(IconBigCheck)`
    color: #298807;
`;

export const IconBiggerAdd = ({style}) => (
    <Ionicons
        style={style}
        name='md-add'
        size={220}
    />
)
export const Styled_Bigger_Add_Icon = styled(IconBiggerAdd)`
    color: ${props => props.theme.colors.gray_light};
    width: 50%;
`;

// icons =============================================


export const Container = styled.View`
    flex: 1;
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

export const Scroll_List = styled.ScrollView`
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
// CustomModal prop =============================================

export const Modal = styled.Modal ``;

export const Modal_Centered = styled.View `
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0.2);
`;

export const Modal_Display = styled.View `
    width: 90%;
    align-self: center;
    background-color: ${props => props.theme.colors.background};
    border-radius: 15px;
    padding: 5px;
`;

export const Wrapper_Text_Input = styled.View `
    width: 88%;
    align-self: center;
    flex-direction: row;
    margin-bottom: 23px;
`;


export const Text_Input = styled.TextInput `
    border-color: ${props => props.theme.colors.gray_bold};
    color: ${props => props.theme.colors.text_color};
    height: 50px;
    width: 100%;
    font-size: 18px;
    padding-left: 30px;
`;

export const Text_Title = styled.Text `
    font-size: 25px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    color: ${props => props.theme.colors.text_color}
`;

export const Btn_close = styled.TouchableOpacity `
    position: absolute;
    top: -5px;
    left: -5px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 60px;
    height: 60px;
    justify-content:center;
    align-items: center;
`;

export const Btn_confirm = styled.TouchableOpacity `
    width: 90%;
    height: 50px;
    background-color: #36A814;
    justify-content:center;
    align-items: center;
    align-self: center;
    margin-bottom: 15px;
`;

export const Text_btn = styled.Text `
    font-size: 21px;
    text-align: center;
    color: #fff;
`;

export const Btn_TimePicker = styled.TouchableOpacity `
    border-color: ${props => props.theme.colors.gray_bold};
    border-bottom-width: 2px;
    color: ${props => props.theme.colors.text_color};
    height: 50px;
    width: 100%;
    font-size: 18px;
    justify-content:center;
    align-self: center;
`;

export const Text_btn_Picker = styled.Text `
    color: ${props => props.theme.colors.text_color};
    font-size: 18px;
    padding-left: 30px;
`;

export const Text_Error = styled.Text `
    font-size: 16px;
    text-align: center;
    color: #ff0000;
    margin-bottom: 15px;
`;

// CustomModal prop =============================================
// EmptyList prop =============================================


export const ContainerList = styled.View`
    width: 100%;
    margin-top: 10px;
    align-self: center;
    justify-content:center;
`;

export const WrapperList = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const InnerInfo = styled.View`
    align-items: center;
    flex-direction: column;
    width: 50%;
`;

export const Text_Description = styled.Text `
    color: ${props => props.theme.colors.gray_bold};
    font-size: 18px;
    text-align: center;
`;

export const WrapperInfo = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const InnerList = styled.View`
    width: 50%;
    /* margin-left: 10px; */
    flex-direction: column;
`;

export const Text_Add_h1 = styled.Text `
    color: ${props => props.theme.colors.gray_bold};
    font-size: 30px;
    text-align: left;
`;

export const Text_Add_h2 = styled.Text `
    color: ${props => props.theme.colors.gray_bold};
    font-size: 23px;
    text-align: left;
`;

// EmptyList prop =============================================


