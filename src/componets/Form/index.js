import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import ResultImc from './ResultImc/';
import styles from './ResultImc/style';

export default function Form()
{


  const [height, setHeight]= useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha a altura e peso.')
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calcular');

  function imcCalc()
  {
    return setImc((weight/(height*height)).toFixed(2))
  }

  function validate()
  {
      imcCalc();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é: ");
      setTextButton("Calcular novamente")
      return
    setImc(null);
    setTextButton("Calcular");
    setWeight(null);
  }


  return (
    <View sytle={styles.formContext}>
      <View sytle={styles.form}>

        <Text style={styles.formLabel}>Altura</Text>
        <TextInput sytle={styles.input}
        value={height}
          onChangeText={setHeight}
          value
          placeholder="Ex: 1.80"
          keyboardType="numeric"
        />

        <Text style={styles.formLabel} >Peso</Text>
        <TextInput sytle={styles.input}
        value={weight}
        onChangeText={setWeight}
          placeholder="Ex: 80KG"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validate()}}>
        <Text style={styles.textButtonCalculator}>Calcular</Text></TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc}/>
    </View>
  );
}
