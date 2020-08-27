import * as React from 'react';
import { Modal, 
    Modal_Centered, Modal_Display, 
    Wrapper_Text_Input, 
    Text_Input,
    Styled_Pencil_Icon,
    Text_Title,
    Styled_Close_Icon,
    Styled_Alarm_Icon,
    Styled_Amount_Icon,
    Btn_close,
    Btn_confirm,
    Text_btn,
    Btn_TimePicker,
    Text_btn_Picker,
    Text_Error
 } from '../styles/Home/style';

export default function CustonModal(props){
    return (
        <Modal visible={props.setVisible} transparent={true}>
            <Modal_Centered onPress={props.press}>
                <Modal_Display>
                    <Btn_close onPress={props.onCloseModal}>
                        <Styled_Close_Icon />
                    </Btn_close>
                    <Text_Title style={{ fontFamily: 'OpenSans_600SemiBold' }}>Adicionar Remédio:</Text_Title>
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
                        <Styled_Amount_Icon />

                        <Text_Input
                            keyboardType='numeric' 
                            placeholder='Quantidade'
                            style={{ borderBottomWidth: 2}}
                            onChangeText={props.onChangeAmount}
                            value={props.valueAmount}
                        />
                    </Wrapper_Text_Input>

                    <Wrapper_Text_Input>
                        <Btn_TimePicker onPress={props.onPressButtonPicker}>
                            <Styled_Alarm_Icon />
                            <Text_btn_Picker>{props.BtnTextValue} Hrs</Text_btn_Picker>
                        </Btn_TimePicker>
                    </Wrapper_Text_Input>

                    <Text_Error>{props.textError}</Text_Error>
                    {/* <Text_Error>náo preencheu o campo</Text_Error> */}

                    <Btn_confirm onPress={props.onConfirm}>
                        <Text_btn>Criar alarme</Text_btn>
                    </Btn_confirm>
                </Modal_Display>
            </Modal_Centered>
        </Modal>  
    )
}