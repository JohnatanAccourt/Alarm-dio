import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import White from '../../constants/White';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: White.colors.background,
    },
    logoHeader:{
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 15
    },
    logoIMG:{
        width: 160,
        height: 160,
    },
    TextAPPTitle:{
        textAlign: 'center',
        fontSize: 26,
        color: White.colors.gray_bold,
        marginBottom: 20
    },
    btn:{
        width: '90%',
        height: 50,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: 'center'
    },
    iconBtn:{
        color: White.colors.gray_semibold
    },
    textBtn:{
        color: White.colors.gray_semibold,
        fontSize: 15,
        marginLeft: 10
    },



    btnTheme:{
        position: 'absolute',
        top: 30,
        left: 5,
        padding: 5,
    },
    activeBTN:{
        color: White.colors.gray_semibold
    }
});