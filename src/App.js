import React, { useRef } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Card } from './ui/Card';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Space } from './ui/Space';
import { InputText } from './ui/InputText';
import { Button } from './ui/Button';
import { CardResultado } from './CardResultado';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

console.log('init')

export default function App() {

  const scrollView = useRef(null);

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps='always'
          keyboardDismissMode='on-drag'
          ref={scrollView}
        >
          <Text style={styles.welcome}>Calculadora</Text>
          <Text style={styles.instructions}>Vamos ver como está sua saúde financeira</Text>
          <Text style={styles.instructions}>para o próximo ano</Text>

          <CardResultado />

          <InputText label='Seu salário mensal' />

          <Space height={40} />

          <Text style={styles.instructions}>Informe abaixo os valores dos seus gastor por MÊS</Text>

          <InputText label='Gasto com supermercado' />
          <InputText label='Conta de luz' />
          <InputText label='Conta de água' />
          <InputText label='Conta de internet/tv' />
          <InputText label='Gasto em combustivel/transporte' />
          <InputText label='Qualquer outros gastos' />

          <Button title='Calcular' onPress={() => {
            scrollView.current.scrollTo({x: 0, y: 0, animated: true})
          }
          } />



        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: 10,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});
