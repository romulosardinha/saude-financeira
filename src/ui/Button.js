import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'

export const Button = (props) => (
    <TouchableOpacity {...props}>
        <View
            style={{
                backgroundColor: 'green',
                padding:15,
                borderRadius:10
            }}
        >
            <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:15}}>
                {props.title}
            </Text>
        </View>
    </TouchableOpacity>
)