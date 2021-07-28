import React, { useEffect, useState, useRef } from 'react';
import { Animated, Easing, View, Text, Image, ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import IndiTabs from './contentList';
import { styles } from '../css/style';
import { getData } from '../actions/getData';

const MainPage = () => {
    const { content } = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();
    const fetchData = () => dispatch(getData());

    const [showList, setShowList] = useState(false);
    const wi = useRef(300);
    const hi = useRef(200);
    const pressed = useRef(false);
    const padd = useRef(0);

    let initVal = new Animated.Value(0);
    let initVal2 = new Animated.Value(0);
    let finVal = new Animated.Value(0);
    let finVal2 = new Animated.Value(0);

    let transY = initVal.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -140, -280]
    })

    let xScale = initVal.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 2],
    })

    let yScale = initVal.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.5]
    })

    let xDescale = initVal.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.5]
    })

    let yDescale = initVal.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 2]
    })

    let changeOpacity = initVal2.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [1, 0, 0, 0.75, 1]

    })

    let changeIconOpa = initVal2.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [0, 0, 0, 0.75, 1]

    })


    const moveAndExpand = easing => {
        fetchData();
        if (!pressed.current) {
            Animated.parallel(
                [
                    Animated.timing(initVal, {
                        toValue: 1,
                        duration: 300,
                        easing,
                        useNativeDriver: true,

                    }),
                    Animated.timing(initVal2, {
                        toValue: 1,
                        duration: 300,
                        easing,
                        useNativeDriver: true,
                    }),
                ]

            ).start(() => {
                wi.current = 500;
                hi.current = 100;
                padd.current = 92;
                pressed.current = true;
                setShowList(true);

            });

        }

    };


    const reverseAll = easing => {
        Animated.parallel(
            [
                Animated.timing(finVal, {
                    toValue: 0,
                    duration: 300,
                    easing,
                    useNativeDriver: true,

                }),
                Animated.timing(finVal2, {
                    toValue: 0,
                    duration: 300,
                    easing,
                    useNativeDriver: true,
                }),
            ]

        ).start(() => {
            wi.current = 300;
            hi.current = 200;
            padd.current = 0;
            pressed.current = false;
            setShowList(false);
            
        });

    }


    const animatedStyles = [
        styles.mainBox,
        {
            width: wi.current,
            height: hi.current,
            marginTop: padd.current,
            transform: [
                {
                    translateY: transY,
                },
                {
                    scaleX: xScale,
                },
                {
                    scaleY: yScale,
                }
            ]

        }
    ];

    const animatedStyles2 = [
        styles.mainBox2,
        {
            width: wi.current,
            opacity: changeOpacity,
            transform: [
                {
                    scaleX: xDescale,
                },
                {
                    scaleY: yDescale,
                }
            ]

        }
    ];

    const animatedStyles3 = [
        styles.mainImage,
        {
            opacity: changeIconOpa
        }
    ]


    useEffect(() => {
        setTimeout(() => {
            moveAndExpand(Easing.linear);
            
        }, 3000)
    }, [])




    return (
        <View style={styles.mainContainer}>
            <TouchableWithoutFeedback onPress={() => moveAndExpand(Easing.linear)}>
                <Animated.View style={animatedStyles}>
                    <Animated.View style={animatedStyles2}>
                        {showList ? <TouchableWithoutFeedback onPress={() => reverseAll(Easing.linear)} >
                            <Animated.Image style={styles.mainImage} source={require('../images/back.png')}></Animated.Image>
                        </TouchableWithoutFeedback> : <View style={styles.mainImage}></View>}
                        <Text style={styles.mainText} >Screen animation will begin in 3 seconds</Text>
                        <View></View>
                    </Animated.View>
                </Animated.View>
            </TouchableWithoutFeedback>
            <View style={styles.mainItems}>
                {showList && <IndiTabs content={content}></IndiTabs>}
            </View>

        </View>

    )

}

export default MainPage;
//<IndiTabs content={content}></IndiTabs>