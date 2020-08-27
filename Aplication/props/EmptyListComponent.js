// import { Ionicons } from '@expo/vector-icons';
// import styles from '../styles/Home/styles';
import React from 'react';
import { 
    ContainerList, 
    WrapperList, 
    Styled_Big_Close_Icon,
    Styled_Big_Check_Icon, 
    Text_Description,
    InnerList,
    Text_h1,
    Text_h2,
    WrapperInfo,
    Styled_Bigger_Add_Icon,
    InnerInfo,
    Text_Add_h1,
    Text_Add_h2
 } 
from '../styles/Home/style';

export default function EmptyListComponent(props){
    return (
        <ContainerList>
            <WrapperList>
                <InnerInfo>
                    <Styled_Big_Close_Icon/>
                    <Text_Description style={{fontFamily: 'OpenSans_400Regular' }}>Significa que não alertou ainda ou que foi negado o alarme</Text_Description>
                </InnerInfo>

                <InnerInfo>
                    <Styled_Big_Check_Icon/>
                    <Text_Description style={{fontFamily: 'OpenSans_400Regular' }}>Significa que você já tomou o remédio hoje</Text_Description>
                </InnerInfo>
            </WrapperList>

            <WrapperInfo onPress={props.onPressFromList}>
                <Styled_Bigger_Add_Icon/>
                <InnerList>
                    <Text_Add_h1 style={{fontFamily: 'OpenSans_700Bold' }}>Toque no ícone</Text_Add_h1>
                    <Text_Add_h2 style={{fontFamily: 'OpenSans_300Light' }}>para adicionar seu primeiro alarme</Text_Add_h2>
                </InnerList>
            </WrapperInfo>
        </ContainerList>
    )
}