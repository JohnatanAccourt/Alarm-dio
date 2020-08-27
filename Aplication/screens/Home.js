import * as React from 'react';
import { useState } from 'react';
import {Text, View, TouchableOpacity, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import Title from '../props/Title';
import List from '../props/List';
import CustonModal from '../props/CustonModal';

import Remedy from '../constants/Remedy';

import { 
    Container, 
    Wrapper_Header,
    BTN_ADD_Remedy,
    Text_Header,
    Styled_Menu_Icon,
    Styled_Add_Icon
} from '../styles/Home/style';

export default function Home({ navigation }) {
    const [modal, setVisibleModal] = useState(false);

    const [amount, setAmount] = useState('');
    const [remedy, setRemedy] = useState('');
    const [textError, setTextError] = useState('');

    const [time, setTime] = useState(new Date(1598051730000));
    const [chosedTime, setChosedTime] = useState('Escolha um horário');
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);
    
    const onChange = (event, selectedDate) => {
        let currentDate = selectedDate || time;
        setShow(Platform.OS === 'ios');

        const timeSelect = currentDate.toUTCString();
        const timeFormat = moment(timeSelect).format('YYYY-MM-DD HH:mm:ss')
        const justTime = timeFormat.split(' ')[1].slice(0,5)

        setChosedTime(justTime);
    }

    const showTimepicker = () => {
        setShow(true);
        setChosedTime('');
    }
    
    function handleModal(){
        setVisibleModal(!modal);
        setChosedTime('Escolha um horário');
        setRemedy('');
        setAmount('');
    } 

    function createAlarm(){
        if(remedy.length == 0) setTextError('Por favor coloque o nome do remédio.')
        if(amount.length == 0) setTextError('Você precisa colocar a quantidade de remédio que você possui.')
        if(chosedTime == 'Escolha um horário') setTextError('É importante que defina um horário para alerta-lo.')

        const remedySubmit = {
            remedyName: remedy,
            amount: amount,
            time: chosedTime,
        }

        Remedy.push(remedySubmit);
    }

    return (
        <Container> 
            <CustonModal 
                setVisible={modal} onCloseModal={() => handleModal()} 

                onChangeRemedyName={valueRemedy => setRemedy(valueRemedy)} valueRemedyName={remedy}
                onChangeAmount={valueAmount => setAmount(valueAmount)} valueAmount={amount}


                onPressButtonPicker={showTimepicker} 
                BtnTextValue={chosedTime}

                onConfirm={() => createAlarm()}
                textError={textError}
            />

            {show &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={time}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            }

            <Wrapper_Header>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Styled_Menu_Icon />
                </TouchableOpacity>

                <BTN_ADD_Remedy onPress={() => handleModal()}>
                    <Text_Header>Adicione um remédio</Text_Header>
                    <Styled_Add_Icon />
                </BTN_ADD_Remedy>
            </Wrapper_Header>

            <Title greetings="Bem Vindo," nameUser="Johnatan Accourt" message="Tomou o Omeprazol hoje?"/>

            <List icon="md-close-circle" time="14:00" remedy="Carvedilol" status="Não tomou hoje" amount={33}/>
        </Container>
    );
}
