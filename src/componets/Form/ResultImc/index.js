import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './style'

export default function ResultImc(props)
{
  return (

    <View style={styles.formContext}>
    <Text>{props.messageResultImc}</Text>

    <Text>{props.resultImc}</Text>
    </View>

  );
}
