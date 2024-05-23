import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

export const RestaurantsStyle = StyleSheet.create({
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
    containTitleImage: {
        marginTop: '7%'
    },
    containeFirstHorizontalDirection: {
        marginTop: '15%'
    },
    horizontalDirection: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.text
    },
    containerTitleContent: {
        marginVertical: '5%'
    },
    titleContent: {
        fontFamily: 'Lexend',
        fontSize: 19,
        color: Colors.text
    },
    horizontalItemContain: {
        flexDirection: 'row'
    },
    quickBiteScrollView: {
        marginVertical: '11%',
    },
    outSideItemContainer: {
        width: 220,
        height: 180,
    },
    itemContainer: {
        width: 205,
        height: 170,
        backgroundColor: 'white',
        borderRadius: 7,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    insideItemContainer: {
        padding: '4.5%',
        alignItems: 'center',
    },
    imageItem: {
        width: '100%',
        height: '65%',
        borderRadius: 6,
    },
    timeItemContainer: {
        position: 'relative', 
        top: -76,
        right: -55,
        width: 70,
        height: 23,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    timeItem: {
        fontFamily: 'LexendRegular',
        fontSize: 11,
        color: Colors.blurText
    },
    nameItemContain: {
        position: 'absolute', 
        bottom: 28,
        left: '4.5%'
    },
    nameItem: {
        fontFamily: 'Lexend',
        fontSize: 14,
        color: Colors.text
    },
    typeItemContain: {
        position: 'absolute', 
        bottom: 11,
        left: '5%'
    },
    typeItem: {
        fontFamily: 'LexendRegular',
        fontSize: 10,
        color: Colors.blurText
    },
    shipContain: {
        flexDirection: 'row'
    },
    carContain: {
        position: 'absolute', 
        bottom: -50,
        left: '-50%'
    },
    car: {
        color: Colors.text,
        fontSize: 16,
        tintColor: Colors.text
    },
    priceContain: {
        position: 'absolute', 
        bottom: -49,
        left: '-36%'
    },
    price: {
        fontFamily: 'Lexend',
        fontSize: 13
    },
    unitContain: {
        position: 'absolute', 
        bottom: -49,
        left: '26%',
        flexDirection: 'row'
    },
    unit: {
        fontFamily: 'Lexend',
        color: Colors.text
    },
    unitBlur: {
        fontFamily: 'Lexend',
        color: 'lightgray'
    }
})