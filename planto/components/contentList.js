import React, {useEffect} from 'react';
import {Animated, View, Text, Image, ScrollView, TextInput, SafeAreaView, FlatList , TouchableWithoutFeedback } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getData} from '../actions/getData';
import {styles} from '../css/style';

const Tabs = ({title, body}) => 
  (

    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text>{body}</Text>
    </View>
  )
  



const IndiTabs = () => {
    const {content} = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();
    const fetchData = () => dispatch(getData());

    const renderItem = ({item}) => {
        return(
          
          <Tabs title={item.title} body={item.body} />
          
      )
  }

    useEffect(() => {
        fetchData();
      }, []);

    return(
      <Animated.View>
        <FlatList data={content} renderItem={renderItem} keyExtractor={item => item.id} />
      </Animated.View>

    );
}

export default IndiTabs;

