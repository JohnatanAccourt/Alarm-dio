import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import White from '../../constants/White'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: White.colors.background,
    },
    wrapperHeader:{
        backgroundColor: White.colors.background,
        height: 60,
        width: '95%',
        alignSelf: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    icon:{
        color: White.colors.gray_light
    },
    btnWrapper:{
        flexDirection: "row",
        alignItems: 'center'
    },
    textHeader:{
        color: White.colors.gray_semibold,
        paddingRight: '2%',
        fontSize: 15
    },


    containerTitle:{
        backgroundColor: White.colors.background,
        width: '85%',
        marginVertical: 7,
        alignSelf: 'center'
    },
    texth2:{
        fontSize: 27,
        color: White.colors.gray_bold
    },
    texth1:{
        fontSize: 33,
        color: White.colors.gray_bold,
        marginVertical: 6,
    },
    texth3:{
        fontSize: 23,
        color: White.colors.gray_bold        
    },

    wrapperList:{
        width: '85%',
        height: 10,
        // backgroundColor: White.colors.gray_light,
        alignSelf: 'center',
        marginTop: 10
    },
    item:{
        width: '100%',
        height: 85,
        backgroundColor: White.colors.gray_evenlight,
        borderRadius: 15,
        flexDirection: "column",
        marginVertical: 5  
    },
    mailyItem:{
        height: '65%',
        width: '100%',
        backgroundColor: White.colors.gray_evenlight,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: "row",
        alignItems: 'center'
    },
    iconClose:{
        color: '#FF0000',
        marginLeft: 10,
        marginRight: 5
    },
    iconCheck:{
        color: '#62B559',
        marginLeft: 10,
        marginRight: 5
    },
    textHr:{
        fontSize: 24,
        marginHorizontal: 3
    },
    textRemedyName:{
        width: '49%',
        fontSize: 18,
    },

    configIcon:{
        position: "absolute",
        top: 0,
        right: 0,
        padding: 7
    },


    checkingItem:{
        backgroundColor: White.colors.gray_evenlight,
        height: '35%',
        width: '100%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    verification:{
        width: '50%',
        height: '100%',
        backgroundColor: '#FF0000',
        borderBottomLeftRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    verificationCheck:{
        width: '50%',
        height: '100%',
        backgroundColor: '#62B559',
        borderBottomLeftRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textVerification:{
        color: '#fff',
        fontSize: 15
    },
    textQtd:{
        fontSize: 15,
        paddingRight: 15
    }

});