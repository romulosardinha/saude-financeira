import React from 'react'
import { Card } from './ui/Card'
import { View, Text } from 'react-native'
import { Space } from './ui/Space'

export const CardResultado = (props) => {
    return (
        <View>
            {
                props.resultado && props.salario ?
                    <View>
                        <Space />
                        {
                            props.resultado > props.salario ?
                                <Card
                                    backgroundColor='green'
                                    padding={20}
                                >
                                    <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold', marginBottom: 10 }}>Parabés</Text>
                                    <Text style={{ color: 'white' }}>Sua saúde financeira vai bem</Text>
                                    <Text style={{ color: 'white' }}>Ano que vem você terá uma poupança de:</Text>
                                    <Text style={{ color: 'white', fontSize: 25, marginTop: 10 }}>R$ {props.resultado.toLocaleString('pt-BR')},00</Text>
                                </Card>
                                : null
                        }
                        {
                            (props.resultado <= props.salario) && props.resultado >= 0 ?
                                <Card
                                    backgroundColor='#002098'
                                    padding={20}
                                >
                                    <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold', marginBottom: 10 }}>Você pode melhorar</Text>
                                    <Text style={{ color: 'white' }}>Sua saúde financeira vai bem</Text>
                                    <Text style={{ color: 'white' }}>Ano que vem você terá uma poupança de:</Text>
                                    <Text style={{ color: 'white', fontSize: 25, marginTop: 10 }}>R$ {props.resultado.toLocaleString('pt-BR')},00</Text>
                                </Card>
                                : null
                        }
                        {
                            props.resultado < 0 ?
                                <Card
                                    backgroundColor='#980000'
                                    padding={20}
                                >
                                    <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold', marginBottom: 10 }}>Ops...</Text>
                                    <Text style={{ color: 'white' }}>Sua saúde financeira não vai bem</Text>
                                    <Text style={{ color: 'white' }}>Ano que vem você terá uma dívida de:</Text>
                                    <Text style={{ color: 'white', fontSize: 25, marginTop: 10 }}>R$ {props.resultado.toLocaleString('pt-BR')},00</Text>
                                </Card>
                                : null
                        }

                    </View>
                    : <Text></Text>
            }
        </View>
    )
}