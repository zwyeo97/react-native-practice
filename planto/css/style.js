import { template } from '@babel/core';
import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        flexDirection: 'column',
    },
    container: {
        flex:1,
        paddingTop: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        textAlign: 'center',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
      fontSize: 32
    }



});

