import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

export const HomeStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: Colors.primary
    },
    containerMargin: {
        marginHorizontal: '5%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%'
    },
    flexTextHeader: {
        flexDirection: 'column',
    },
    textHeader: {
        fontFamily: 'Gelion',
        fontSize: 20,
        color: Colors.text
    },
    flexIconHeader: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderWidth: 0,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        color: Colors.text,
        fontSize: 15
    },
    flexTitle: {
        flexDirection: 'row',
        marginTop: '3%',
        marginHorizontal: '1%',
        justifyContent: 'space-between'
    },
    containerTextTilte: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: -28
    },
    textTilte: {
        fontFamily: 'Lexend',
        fontSize: 30,
        color: Colors.text,
        letterSpacing: 0.5
    },
    imageTitle1: {
        width: '20%',
        height: 100,
    },
    imageTitle2: {
        marginTop: '3%',
        width: '23%',
        height: 65,
        marginRight: '1%'
    },
    containerContent: {
        marginLeft: '2%',
    },
    containerTextInput: {
        marginTop: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: '3%'
    },
    textInput: {
        width: '99%',
        height: 50,
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 8,
        fontFamily: 'Lexend',
        fontSize: 13,
        paddingHorizontal: '3%',
        color: Colors.text
    },
    iconTextInput: {
        marginLeft: '-7%'
    },
    containFirstDirection: {
        marginTop: '10%',
    },
    direction: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.text
    },
    containerTitleContent: {
        marginVertical: '4%'
    },
    titleContent: {
        fontFamily: 'Lexend',
        fontSize: 19
    }
})