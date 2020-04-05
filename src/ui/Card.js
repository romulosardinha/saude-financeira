import React from 'react'
import { View } from 'react-native'

export const Card = (props) => {
    return (
        <View style={{
            backgroundColor: props.backgroundColor || '#fff',
            borderWidth: 1,
            borderColor: "#eee",
            borderRadius: 10,
            padding: props.padding || 10,
            width: '100%'
        }}>
            {props.children}
        </View>
    )
}