import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
            style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Página inicial
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Lista')
            }>
            <Text>Lista</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Details')
            }>
            <Text>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Cadastro')
            }>
            <Text>Cadastro</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: '#000000'
          }}>
          Flasco do Dragão
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: '#000000'
          }}>
          www.flascododragao.com.br
        </Text>
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     width: 300,
//     marginTop: 16,
//   },
// });
export default HomeScreen;