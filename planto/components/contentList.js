import React, {useEffect} from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getData} from '../actions/getData';


const IndiTabs = () => {
    const {content} = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();
    const fetchData = () => dispatch(getData());

    useEffect(() => {
        fetchData();
      }, []);

    return(
        <ScrollView>

        {content.map((item) =>
            <View key={item.id}>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>

        )}
        </ScrollView>

    )
}

export default IndiTabs;