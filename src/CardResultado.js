import React from 'react'
import { Card } from './ui/Card'
import { View, Text } from 'react-native'
import { Space } from './ui/Space'

export const CardResultado = (props) => {
    return (
        <View>
            <Space />
            <Card
                backgroundColor='green'
                padding={20}
            >
                <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold', marginBottom: 10 }}>Parabés</Text>
                <Text style={{ color: 'white' }}>Sua saúde financeira vai bem</Text>
                <Text style={{ color: 'white' }}>Final do ano você terá uma poupança de:</Text>
                <Text style={{ color: 'white', fontSize: 25, marginTop: 10 }}>R$ {props.resultado},00</Text>
            </Card>
            <Card
                backgroundColor='#002098'
                padding={20}
            >
                <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold', marginBottom: 10 }}>Você pode melhorar</Text>
                <Text style={{ color: 'white' }}>Sua saúde financeira vai bem</Text>
                <Text style={{ color: 'white' }}>Final do ano você terá uma poupança de:</Text>
                <Text style={{ color: 'white', fontSize: 25, marginTop: 10 }}>R$ {props.resultado},00</Text>
            </Card>
            <Card
                backgroundColor='#980000'
                padding={20}
            >
                <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold', marginBottom: 10 }}>Ops...</Text>
                <Text style={{ color: 'white' }}>Sua saúde financeira não vai bem</Text>
                <Text style={{ color: 'white' }}>Final do ano você terá uma dívida de:</Text>
                <Text style={{ color: 'white', fontSize: 25, marginTop: 10 }}>R$ {props.resultado},00</Text>
            </Card>
        </View>
    )
}