import React, {useEffect} from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import IndiTabs from './contentList';


const MainPage = () => {
    return(
        <ScrollView>
            <View>
                <Text>Screen animation will begin in 3 seconds</Text>

            </View>
        </ScrollView>

    )

}

export default MainPage;