import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, Share} from 'react-native';
import styles from './style'

export default function ResultImc(props)
{

  const oneShare = async () =>
  {
    const result = await Share.share({
      message: "Meu imc é:" + props.resultImc,
    });
  }

  return (

    <View style={styles.contextForm}>
        <View style={styles.boxShareButton}>
          <Text style={styles.titleResultImc}>{props.messageResultImc}</Text>
          <Text>{props.resultImc}</Text>
          <TouchableOpacity onPress={oneShare} style={styles.shared}>
            <Text style={styles.sharedText}>Compartilhar</Text>
          </TouchableOpacity>
    </View>

    <View style={styles.formContext}>
    </View>

   </View>
  );
}
