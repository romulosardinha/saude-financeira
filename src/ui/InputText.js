import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Card } from './Card'

export const InputText = (props) => (
    <View style={{
        marginTop: 10,
        marginBottom: 10
    }}>
        <Text
            style={{
                color: '#666',
                marginBottom: 5,
                marginLeft: 10,
            }}
        >{props.label}</Text>
        <Card>
            <TextInput placeholder={props.label} />
        </Card>
    </View>
)