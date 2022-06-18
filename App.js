import { StyleSheet, Text, View } from 'react-native';
import Title from './src/componets/Title';
import Form from './src/componets/Form';
import Main from './src/componets/Main';
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingTop: 80
  },
});
