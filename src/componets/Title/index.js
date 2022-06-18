import React from 'react';

import {View, Text, TextInput} from 'react-native';
import styles from './style';

export default function Form()
{
  return (
    <View>
      <View style={styles.boxTitle}>

        <Text style={styles.textTitle}>Imc Calc</Text>
      </View>
    </View>
  );
}
