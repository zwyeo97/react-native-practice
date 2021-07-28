import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View, Text, Image, ScrollView, TextInput, SafeAreaView, FlatList, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../css/style';
import * as Animatable from 'react-native-animatable';

const Tabs = ({ title, body, index }) => {
  let transitionDur = useRef(500);
  
  return (
    <Animatable.View animation='fadeIn' style={styles.item} duration={transitionDur.current} delay={index  ? (index * transitionDur.current  ) / 5  : 0} useNativeDriver >
      <Text style={styles.title}>{title}</Text>
      <Text>{body}</Text>
    </Animatable.View >

  )

}


const IndiTabs = ({content}) => {

  const renderItem = ({ item }) => {
    return (

      <Tabs title={item.title} body={item.body} index={item.id} />

    )
  }

  return (

    <FlatList data={content} renderItem={renderItem} keyExtractor={item => item.id} />


  );
}

export default IndiTabs;

