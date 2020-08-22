import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Modal, 
    Modal_Centered, Modal_Display, 
    Wrapper_Text_Input, 
    Text_Input,
    Styled_Pencil_Icon,
    Text_Title,
    Styled_Close_Icon,
    Btn_close,
    Btn_confirm,
    Text_btn
 } from '../styles/Home/style';

export default function CustonModal(props){
    return (
        <Modal visible={props.setVisible} transparent={true}>
            <Modal_Centered onPress={props.press}>
                <Modal_Display>
                    <Btn_close onPress={props.onCloseModal}>
                        <Styled_Close_Icon />
                    </Btn_close>
                    <Text_Title style={{ fontFamily: 'OpenSans_400Regular' }}>Adicionar Remédio:</Text_Title>
                    <Wrapper_Text_Input>
                        <Styled_Pencil_Icon />

                        <Text_Input 
                            placeholder='Nome do remédio'
                            style={{ borderBottomWidth: 2}}
                            onChangeText={props.onChangeRemedyName}
                            value={props.valueRemedyName}
                        />
                    </Wrapper_Text_Input>
                    <Wrapper_Text_Input>
                        <Styled_Pencil_Icon />

                        <Text_Input
                            keyboardType='number-pad' 
                            placeholder='Quantidade'
                            style={{ borderBottomWidth: 2}}
                            onChangeText={props.onChangeAmount}
                            value={props.valueAmount}
                        />
                    </Wrapper_Text_Input>

                    <Btn_confirm onPress={props.onConfirm}>
                        <Text_btn>Criar alarme</Text_btn>
                    </Btn_confirm>
                </Modal_Display>
            </Modal_Centered>
        </Modal>  
    )
}