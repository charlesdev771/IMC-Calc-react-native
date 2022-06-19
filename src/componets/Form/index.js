import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, Keyboard, Vibration, Pressable, FlatList} from 'react-native';
import ResultImc from './ResultImc';
import styles from './ResultImc/style';

export default function Form()
{


  const [height, setHeight]= useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha a altura e peso.')
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calcular');
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([])

  function imcCalc()
  {
    let heightFormat = height.replace(',' , '.')
    let totalImc = (weight/(heightFormat*heightFormat)).toFixed(2);
    setImcList ((arr) => [...arr,{id: new Date().getTime(), imc:totalImc}]);
    setImc(totalImc);
  }

  function validate()
  {
      imcCalc();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é: ");
      setTextButton("Calcular novamente")
      verificationImc(null);
      return
    setImc(null);
    setTextButton("Calcular");
    setWeight(null);
    setErrorMessage(null);
  }

  function verificationImc()
  {
    if (imc != null)
    {
      Vibration.vibrate();
      setErrorMessage("Campo Obrigatorio");
    }
  }


  return (
      <View sytle={styles.formContext}>


      <Pressable onPress={Keyboard.dimiss} sytle={styles.form}>

        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}> {errorMessage} </Text>
        <TextInput sytle={styles.input}
        value={height}
          onChangeText={setHeight}
          value
          placeholder="Ex: 1.80"
          keyboardType="numeric"
        />

        <Text style={styles.errorMessage}> {errorMessage} </Text>
        <Text style={styles.formLabel} >Peso</Text>
        <TextInput sytle={styles.input}
        value={weight}
        onChangeText={setWeight}
          placeholder="Ex: 80KG"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validate()}}>
        <Text style={styles.textButtonCalculator}>Calcular</Text></TouchableOpacity>
      </Pressable>
      <ResultImc messageResultImc={messageImc} resultImc={imc}/>

      <FlatList
        style={styles.listImc}
        data={imcList.reverse()}
        renderItem={({item}) => {
          return(
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultItemList}>Resultado Imc = {item.imc}</Text>
            </Text>
          )
      }}
      keyExtractor={(item) => {item.id}}
      >
      </FlatList>
    </View>
  );
}
