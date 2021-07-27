import React, {useEffect} from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getData} from '../actions/getData';
import {styles} from '../css/style';

const IndiTabs = () => {
    const {content} = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();
    const fetchData = () => dispatch(getData());

    useEffect(() => {
        fetchData();
      }, []);

    return(
        <ScrollView style={styles.container}>

        {content.map((item) =>
            <View key={item.id} style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>

        )}
        </ScrollView>

    )
}

export default IndiTabs;