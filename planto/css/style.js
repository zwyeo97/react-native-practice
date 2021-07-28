
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff592b',
        flexDirection: 'row',
    },
    mainBox2: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ff592b',
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        backgroundColor: 'teal',

    },
    item: {
        backgroundColor: '#c7fce1',
        textAlign: 'center',
        padding: 20,
        marginVertical: 8,

    },
    title: {
        fontSize: 20
    },
    mainContainer: {
        width: '100%',
        backgroundColor: '#a9c6f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center'

    },
    mainItems: {
        display: 'flex',
        paddingTop: 8,
    },
    mainText: {
        color: 'black',
        width: 200,
    },
    mainImage: {
        width: 32,
        height: 32,
        backgroundColor: 'transparent',

    },


});

