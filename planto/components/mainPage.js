import React, {useEffect, useState} from 'react';
import {Animated, Easing, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import IndiTabs from './contentList';
import {styles} from '../css/style';




const MainPage = () => {
    let pos = new Animated.ValueXY({x:0, y:0});
    let size = new Animated.ValueXY({x:250, y:250});
    let size2 = new Animated.Value(50);

    let size2_ = size2.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 250],

    })

    let pos2 = new Animated.Value(0);
    let pos2_1 = pos2.interpolate({
        inputRange: [0, 1],
        outputRange:[0, -300]
    })

    let pos2_2 = pos2.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    let pos2_3 = pos2.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 2],
    })

    let pos2_4 = pos2.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.5]
    })

    let pos2_5 = pos2.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.5]
    })

    let pos2_6 = pos2.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 2]
    })

    const expand2 = easing => {
        Animated.timing(size2, {
            toValue: 1,
            duration: 1200,
            easing,
            useNativeDriver: false,
        }

        ).start();

    }

    const expand = easing => {
        Animated.timing(size, {
            toValue: {x: 400, y:50},
            duration: 1200,
            easing,
            useNativeDriver: false,
        }

        ).start(() => moveToTop(easing));

    }


    const moveToTop = easing =>{

        Animated.timing(pos2, {
            toValue: 1,
            duration: 1200,
            easing,
            useNativeDriver: true,

        }).start();



    };

    const animatedStyles = [
        styles.mainBox,
        {
          width: 250,
          height: 250,
          transform: [
            {
                translateX: pos2_2,
            },
            {
                translateY: pos2_1,
            },
            {
                scaleX: pos2_3,
            },
            {
                scaleY: pos2_4,
            }
          ]
          
        }
      ];

      const animatedStyles2 = [
        styles.mainBox,
        {
          transform: [
            {
                scaleX: pos2_5,
            },
            {
                scaleY: pos2_6,
            }
          ]
          
        }
      ];
    

    return(
        <TouchableOpacity onPress = {() => moveToTop(Easing.linear)}>    
            <Animated.View style={animatedStyles} >
                <Animated.View style={animatedStyles2}>
                    <Text adjustsFontSizeToFit={true} style={{fontSize:15, maxWidth:150}}>S creen animation will begin in 3 seconds</Text>
                </Animated.View>
                   
            </Animated.View>
        </TouchableOpacity>

    )

}

export default MainPage;