import React, { useRef, useState } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Space } from './ui/Space';
import { InputText } from './ui/InputText';
import { Button } from './ui/Button';
import { CardResultado } from './CardResultado';
import { merge } from './functions/merge';

console.log('init')

export default function App() {

  const scrollView = useRef(null);

  const [gastos, _setgastos] = useState({
    salario: 0,
    supermercado: 0,
    luz: 0,
    agua: 0,
    internet: 0,
    combustivel: 0,
    outros: 0,
  })
  const setgastos = (obj) => _setgastos({ ...merge(gastos, obj) })


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

          <InputText label='Seu salário mensal' value={String(gastos.salario||'')} onChangeText={(text) => setgastos({ salario: isNaN(Number(text)) ? gastos.salario : Number(text) })}/>

          <Space height={40} />

          <Text style={styles.instructions}>Informe abaixo os valores dos seus gastor por MÊS</Text>

          <InputText label='Gasto com supermercado' value={String(gastos.supermercado||'')} onChangeText={(text) => setgastos({ supermercado: isNaN(Number(text)) ? gastos.supermercado : Number(text) })} />
          <InputText label='Conta de luz' value={String(gastos.luz||'')} onChangeText={(text) => setgastos({ luz: isNaN(Number(text)) ? gastos.luz : Number(text) })}/>
          <InputText label='Conta de água' value={String(gastos.agua||'')} onChangeText={(text) => setgastos({ agua: isNaN(Number(text)) ? gastos.agua : Number(text) })}/>
          <InputText label='Conta de internet/tv' value={String(gastos.internet||'')} onChangeText={(text) => setgastos({ internet: isNaN(Number(text)) ? gastos.internet : Number(text) })}/>
          <InputText label='Gasto em combustivel/transporte' value={String(gastos.combustivel||'')} onChangeText={(text) => setgastos({ combustivel: isNaN(Number(text)) ? gastos.combustivel : Number(text) })}/>
          <InputText label='Qualquer outros gastos' value={String(gastos.outros||'')} onChangeText={(text) => setgastos({ outros: isNaN(Number(text)) ? gastos.outros : Number(text) })}/>

          <Button title='Calcular' onPress={() => {
            console.log(gastos)
            scrollView.current.scrollTo({ x: 0, y: 0, animated: true })
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
